import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
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
