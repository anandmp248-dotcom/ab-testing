import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    authorId: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    published: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// Prevent model overwrite during hot reload in Next.js
export default mongoose.models.Post || mongoose.model("Post", PostSchema);