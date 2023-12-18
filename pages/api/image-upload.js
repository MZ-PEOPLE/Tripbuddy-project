import multer from "multer";
import crypto from "crypto";
import path from "path";
import User from "./lib/models/user.model";
import verifyToken from "./utils/verifyToken";

// 멀터 라이브러리로 저장하는 로직
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads", // 저장경로
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      crypto.randomBytes(16, (err, buf) => {
        // 이미지의 이름이 겹치지않게 랜덤한 이름 생성
        if (err) return cb(err);
        cb(null, buf.toString("hex") + ext);
      });
    },
  }),
}).single("image");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST 만가능" });
  }

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "파일 업로드 오류" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "파일이 업로드 되지않음." });
    }

    try {
      const decoded = verifyToken(req);
      const profileImage = `/uploads/${req.file.filename}`; // 저장된 파일경로 + 파일이름
      await User.findOneAndUpdate({ id: decoded.userId }, { profileImage }, { new: true });

      res.status(200).json({ message: "업로드 성공" });
    } catch (error) {
      res.status(500).json({ error: "업데이트 오류" });
    }
  });
}

// next.js의 자동 파싱을 비활성화함으로써 multer가 본문의 요청을 제어하게함
export const config = {
  api: {
    bodyParser: false,
  },
};
