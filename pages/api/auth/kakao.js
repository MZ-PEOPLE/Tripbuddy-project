import dbConnect from "@/pages/api/lib/db/mongodb";
import User from "@/pages/api/lib/models/user.model";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { id, nickname, profile_image, age } = req.body;
      let user = await User.findOne({ id });

      if (!user) {
        // db에 유저 없을경우 생성
        console.log("새로운 유저 업데이트");
        user = new User({ id, name: nickname, profileImage: profile_image, age });
        await user.save();
      }
      // 확인 후 유저 토큰 발행
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(user, token);
      // 토큰 발행 후 토큰 전송
      res.status(200).json({ message: "로그인 성공", token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
