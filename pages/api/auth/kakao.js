import dbConnect from "@/lib/db/mongodb";
import User from "@/lib/models/user.model";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { id, nickname, profile_image, age } = req.body;
      let user = await User.findOne({ id });

      if (!user) {
        user = new User({ id, name: nickname, profileImage: profile_image, age });
        await user.save();
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(user, token);
      res.status(200).json({ message: "로그인 성공", user, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
