import User from "./lib/models/user.model";
import verifyToken from "./utils/verifyToken";

export default async function userUpdate(req, res) {
  if (req.method === "POST") {
    const decoded = verifyToken(req);
    if (!decoded) {
      console.log("인증 실패");
      return res.status(401).json({ error: "인증 실패" });
    }

    // 토큰에서 디코드된 유저 아이디를 가져옴
    const userId = decoded.userId;
    const { name, about } = req.body;
    console.log(userId, name, about);

    try {
      // 업데이트 로직 이미지도 해야함 아직 못했음
      const updatedUser = await User.findOneAndUpdate({ id: userId }, { name: name, about: about }, { new: true });
      console.log(updatedUser);

      if (updatedUser) {
        console.log("유저 업데이트 성공:");
        return res.status(200).json({ message: "업데이트 성공" });
      } else {
        console.log("유저가없음");
        return res.status(404).json({ error: "유저가 없습니다." });
      }
    } catch (error) {
      console.error("유저 업데이트 중 에러 발생", error);
      return res.status(500).json({ error: "서버 오류" });
    }
  } else {
    console.log("잘못된 요청");
    return res.status(405).end();
  }
}
