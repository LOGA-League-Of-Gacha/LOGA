export const runtime = "edge";

export async function GET(request: Request) {
  return new Response(JSON.stringify({ status: "ok", message: "API is working" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
