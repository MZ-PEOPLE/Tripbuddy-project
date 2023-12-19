import WriteInput from "./lib/models/write.model";

export default async function handler(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  try {
    const posts = await WriteInput.find()
      .select("dateSelectData genderAgeSelectData headSelectData location.name imagePaths")
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    return res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "서버에 문제있어용" });
  }
}
