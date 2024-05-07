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

// MODIFIER UN POST
export async function PATCH(request, { params }) {
  await connectDB();

  try {
    const body = await request.json();

    const updatedPost = await post.findOneAndUpdate(
      { _id: params.postId },
      { ...body },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "Post modifié avec succès", updatedPost }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500, // Internal Server Error
    });
  }
}

// SUPPRIMER UN POST
export async function DELETE(request, { params }) {
  await connectDB();

  try {
    const deletedPost = await post.findOneAndDelete({ _id: params.postId });

    return new Response(
      JSON.stringify({ message: "Post supprimé avec succès", deletedPost }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
