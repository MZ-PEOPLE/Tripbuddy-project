import mongoose from "mongoose";

const writeSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: [String],
    dateSelectData: {
      startDate: Date,
      endDate: Date
    },
    genderAgeSelectData: {
      gender: String,
      ageRange: String
    },
    headSelectData: {
      headCounts: String
    },
    travelMapData: { /* 여행지도 구조 정의 */ },
  {
    timestamps: true,
  }
}
);

export default mongoose.models.Write || mongoose.model("Write", writeSchema);