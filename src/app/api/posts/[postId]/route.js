import { redirect } from "next/navigation.js";
import post from "../../../../../Model/post.js";
import connectDB from "@/lib/db.js";

export async function GET(resquest, { params }) {
  await connectDB();

  try {
    const thisPost = await post.findOne({ _id: params.postId });

    return new Response(JSON.stringify(thisPost), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Aucun post trouvé" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

// MODIFIER
export async function PATCH(request, { params }) {
    await connectDB()
}
