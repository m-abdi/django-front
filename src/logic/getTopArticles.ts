export default async function getTopArticles(locale: string) {
  const resp = await fetch(
    `http://127.0.0.1:8000/public/articles/?number=10&locale=${locale}`, {method: "get"}
  );
  return await resp.json();
}
