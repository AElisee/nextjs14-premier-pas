import { comments } from "./comments/data.js";

export async function GET() {
  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
