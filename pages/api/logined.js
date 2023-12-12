import verifyToken from "./utils/verifyToken";
import User from "./lib/models/user.model";

export default async function logined(req, res) {
  if (req.method === "GET") {
    // 토큰 검증
    const decoded = verifyToken(req);
    if (!decoded) {
      console.log("무언가에서 실패해버림");
      return res.status(401).json({ error: "인증 실패" });
    }
    console.log(decoded, "디코딩정보임");

    const user = await User.findOne({ id: decoded.userId }).select(
      "profileImage name age about id gender -_id"
    );
    // 이미지, 이름 반환 + 고유 아이디 반환 X
    console.log("성공!", user);
    return res.status(200).json({
      id: user.id,
      profileImage: user.profileImage,
      age: user.age,
      name: user.name,
      about: user.about,
      gender: user.gender,
    });
  } else {
    console.log("실패~");
    res.status(405).end();
  }
}
