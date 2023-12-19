import WritePost from "../lib/models/write.model";
import User from "../lib/models/user.model";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const post = await WritePost.findById(id);
    const writer = await User.findOne({ id: post.userId }).select("name profileImage");

    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    return res.json({ post, writer });
  } catch (error) {
    return res.status(500).json({ message: "서버에 문제있어용" });
  }
}
