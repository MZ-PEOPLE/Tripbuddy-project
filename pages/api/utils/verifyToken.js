import jwt from "jsonwebtoken";

const verifyToken = (req) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      console.log("토큰없음");
      return false;
    }

    // JWT 토큰의 유효성만 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("토큰 검증 성공");
    return decoded;
  } catch (error) {
    console.log("토큰 검증 실패:", error);
    return false;
  }
};

export default verifyToken;
