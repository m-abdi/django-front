export default async function getAllArticles() {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/articles/?all=1",
    { method: "get" }
  );

  const jresp = await resp.json();
  return jresp;
}
