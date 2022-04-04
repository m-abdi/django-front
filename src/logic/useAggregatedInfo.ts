import useSWR from "swr";

const fetcher = async (url: string) => fetch(url).then((resp) => resp.json());

export default function getAggInfo() {
  const { data, error } = useSWR(`/api/aggInfo`, fetcher);

  return {
    aggInfo: data,
    isAggInfoLoading: !data && !error,
    isAggInfoError: error,
  };
}
