import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useWallet() {
  const { data, error } = useSWR("/api/walletBalance", fetcher);
  return {
    wallet: data,
    isLoading: !error && !data,
    isError: error,
  };
}
