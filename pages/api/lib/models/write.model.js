import mongoose from "mongoose";

let WriteInput;

try {
  // 이미 정의된 모델이 있는지 확인
  WriteInput = mongoose.model("WriteInput");
} catch (e) {
  // 모델이 없으면 새로 정의
  const writeSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    dateSelectData: {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
    genderAgeSelectData: {
      gender: {
        type: String,
      },
      ageRange: {
        type: String,
      },
    },
    headSelectData: {
      headCounts: {
        type: String,
      },
    },
    imagePaths: {
      type: [String],
    },
  });

  WriteInput = mongoose.model("WriteInput", writeSchema);
}

export default WriteInput;
