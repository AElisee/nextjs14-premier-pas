import { redirect } from "next/navigation.js";
import { comments } from "../data.js";

// OBTENIR UN SEUL COMMENTAIRE
export async function GET(request, { params }) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  // rediriger lorsque le id passer en paramètre n'est trouver
  if (!comment) {
    redirect("/api/comments");
  }

  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// MODIFIER UN COMMENTAIRE
export async function PATCH(request, { params }) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return new Response(JSON.stringify(comments[index]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// SUPPRIMER UN COMMENTAIRE
export async function DELETE(request, { params }) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  const deletedComment = comments[index];
  comments.splice(index, 1);
  return new Response(JSON.stringify(deletedComment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
