import multer from "multer";
import path from "path";
import WritePost from "./lib/models/write.model";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 이미지를 저장할 디렉토리 설정
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    // 업로드된 파일의 이름 설정 (유니크하게 만들 수 있도록)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage }).array("images", 5);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleImageUpload(req, res) {
  try {
    console.log("요청 받음");

    await new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) {
          console.error("이미지 업로드에 실패했습니다:", err);
          return reject({
            status: 500,
            message: "이미지 업로드에 실패했습니다.",
            error: err.message,
          });
        }
        console.log("이미지 업로드 완료");

        resolve();
      });
    });

    const imagePaths = req.files.map((file) => `/img/${file.filename}`);
    console.log("이미지 경로:", imagePaths);

    // MongoDB에 이미지 경로를 저장
    const writePost = new WritePost({
      // 다른 필드들도 필요한 경우 여기에 추가
      imagePaths: imagePaths,
    });

    console.log("MongoDB에 저장할 데이터:", writePost);

    await writePost.save(); // 이미지 경로들을 MongoDB에 저장

    console.log("MongoDB에 저장 완료");

    return res.status(200).json({
      message: "이미지 업로드가 완료되었습니다.",
      imagePaths,
    });
  } catch (error) {
    console.error("이미지 업로드 오류", error);
    return res.status(error.status || 500).json({
      message: error.message || "이미지 업로드 중 에러가 발생했습니다.",
    });
  }
}
