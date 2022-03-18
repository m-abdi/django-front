export default async function getAppInfo(locale: string) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/general/?locale=${locale}`
  );
  return await resp.json();
}
