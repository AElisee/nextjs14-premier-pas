import post from "../../../../Model/post.js";
import connectDB from "@/lib/db.js";

export const GET = async (request) => {
  await connectDB();

  try {
    const posts = await post.find({});
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response("error");
  }
};

export async function POST(request) {
  await connectDB();

  const body = await request.json();

  const newPost = new post({
    title: body.title,
    text: body.text,
  });
  await newPost.save();
  return new Response(JSON.stringify(newPost), {
    hedears: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
