export default async function getAllArticles(locale: string) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/?all=1&locale=${locale}`,
    { method: "get" }
  );

  const jresp = await resp.json();
  return jresp;
}
