import { Exchanges } from "../Types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());
export default function giveMePrices(exchange: Exchanges) {
  if (exchange === "Kucoin") {
    // performance (just symbols that we need)
    const { data, error } = useSWR("/api/prices?source=Kucoin", fetcher);
    return {
      prices: data,
      isLoading: !data && !error,
      error: error,
    };
  }
}
