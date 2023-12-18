import WritePost from "./lib/models/write.model";

export default async function handleWriteInput(req, res) {
  try {
    console.log("요청데이터:", req.body);

    const {
      title,
      content,
      dateSelectData,
      genderAgeSelectData,
      headSelectData,
      location,
    } = req.body;

    // 이미지 경로는 uploadImages.js에서 받아온 것으로 가정
    const { imagePaths } = req.body;

    // 필수 필드 유효성 검사
    if (
      !title ||
      !content ||
      !dateSelectData ||
      !dateSelectData.startDate ||
      !dateSelectData.endDate ||
      !genderAgeSelectData ||
      !genderAgeSelectData.gender ||
      !genderAgeSelectData.ageRange ||
      !headSelectData ||
      !headSelectData.headCounts ||
      !location.name ||
      !location.latitude ||
      !location.longitude ||
      !imagePaths // 이미지 경로 필수 필드 여부 확인
    ) {
      console.log("필수 필드 누락");
      return res.status(400).json({
        message: "필수 필드가 누락되었습니다.",
      });
    }

    const writePost = new WritePost({
      title,
      content,
      dateSelectData,
      genderAgeSelectData,
      headSelectData,
      imagePaths, // 이미지 경로 추가
      location,
    });

    console.log("MongoDB에 저장할 데이터:", writePost);

    await writePost.save(); // 이미지 경로들을 MongoDB에 저장

    console.log("MongoDB에 저장 완료");

    return res.status(200).json({
      message: "글 작성이 완료되었습니다.",
      imagePaths,
    });
  } catch (error) {
    console.error("글 작성 오류", error);
    return res.status(error.status || 500).json({
      message: error.message || "글 작성 중 에러가 발생했습니다.",
    });
  }
}
