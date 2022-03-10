import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useArticles() {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/articles/",
    fetcher
  );
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
}
