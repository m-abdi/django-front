export default async function getTopArticles(locale: string) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/?top=10&&locale=${locale}`
  );
  return await resp.json();
}
