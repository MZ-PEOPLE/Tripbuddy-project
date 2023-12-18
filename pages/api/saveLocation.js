import WritePost from "./lib/models/write.model";

export default async function saveLocation(req, res) {
  try {
    const { name, latitude, longitude } = req.body;

    if (!name || !latitude || !longitude) {
      return res.status(400).json({
        message: "필수 필드가 누락되었습니다.",
      });
    }

    const newWriteInput = new WritePost({
      location: {
        name,
        latitude,
        longitude,
      },
    });

    await newWriteInput.save();

    return res.status(200).json({
      message: "위치 정보 저장이 완료되었습니다.",
    });
  } catch (error) {
    console.error("위치 저장 오류:", error);
    return res.status(error.status || 500).json({
      message: error.message || "위치 정보 저장 중 에러가 발생했습니다.",
    });
  }
}
