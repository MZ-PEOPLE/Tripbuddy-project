import WriteInput from "./lib/models/write.model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId } = req.body;
    try {
      const posts = await WriteInput.find({ userId }).select("location.name imagePaths _id");
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "프로필에서 게시물 요청 안대안대" });
    }
  }
}
