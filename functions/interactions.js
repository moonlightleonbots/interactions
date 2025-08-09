export async function onRequest(context) {
  const targetUrl = "https://nhscripts.vercel.app/api/discord/webhook";

  const response = await fetch(targetUrl);
  const data = await response.text();

  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
