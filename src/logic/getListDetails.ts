import useSWR from "swr";

const fetcher = async (url: string) => fetch(url).then((resp) => resp.json());

export default function getListDetails(listId: string) {
  const { data, error } = useSWR(`/api/listInfo?id=${listId}`, fetcher);

  return {
    listDetail: data,
    isListDetailLoading: !data && !error,
    isListDetailError: error,
  };
}
