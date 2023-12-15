import WritePost from "./lib/models/write.model";

export default async function handlePostCreation(req, res) {
  try {
    console.log("요청데이터:", req.body);

    const {
      title,
      content,
      dateSelectData,
      genderAgeSelectData,
      headSelectData,
      imagePaths,
    } = req.body;

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
      !imagePaths
    ) {
      console.log("필수 필드 누락");
      return res.status(400).json({
        message: "필수 필드가 누락되었습니다.",
      });
    }

    const newWrite = new WritePost({
      title,
      content,
      dateSelectData,
      genderAgeSelectData,
      headSelectData,
      imagePaths,
    });

    console.log("저장할 데이터:", newWrite);
    await newWrite.save();

    console.log("글 작성 완료");
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
