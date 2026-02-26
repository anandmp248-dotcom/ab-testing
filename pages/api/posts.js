import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching posts" });
    }
  }

  if (req.method === "POST") {
    try {
      const post = await Post.create(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: "Error creating post" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}