import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    age: { type: Number, required: true },
    name: { type: String, required: true, maxlength: 10 },
    about: { type: String, default: "", maxlength: 30 },
    profileImage: { type: String },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    rating: { type: Number, default: 0 },
    lastLogin: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
