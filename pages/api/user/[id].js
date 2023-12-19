import User from "../lib/models/user.model";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const writer = await User.findOne({ _id: id }).select("name about gender profileImage age id");

    return res.status(500).json(writer);
  } catch (error) {
    return res.status(500).json({ message: "실패했어용 아마 없는사용자인듯?" });
  }
}
