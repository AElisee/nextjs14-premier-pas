import mongoose from "mongoose";

const Post = mongoose.Schema(
  {
    title: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", Post);
