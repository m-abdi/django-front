import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useUser() {
  const { data, error } = useSWR("/api/userData", fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
