import { NextRequest } from "next/server.js";
import { comments } from "./data.js";
import { redirect } from "next/navigation.js";

export async function GET(request) {
  // dans la fonction GET de base ne prend pas "request en parametre",
  // request est ajouter pour les query request
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  // GET simple return seulement comments
  return new Response(JSON.stringify(filteredComments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// POSTER UN COMMENTAIRE
export async function POST(request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    hedears: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
