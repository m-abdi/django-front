import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function getAllFoods() {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/shop/foods/",
    fetcher,
    { refreshInterval: 3000 }
  );
  return {
    foodsData: data,
    foodsDataIsLoading: !error && !data,
    foodsDataIsError: error,
  };
}
