export default async function getAllArticles() {
  const resp = await fetch(`http://127.0.0.1:8000/public/articles/?all`, {
    method: "get",
  });

  const jresp = await resp.json();
  return jresp;
}
