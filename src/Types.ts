export type Exchanges = "Kucoin" | "Binance" | "FTX";

export interface KucoinAsset {
  id: string;
  currency: string; //   "USDT"
  type: string; //   "trade"
  balance: string;
  available: string;
  holds: string;
}

export interface DatabaseTypes {
  _id: string;
  exchange: string;
  price: string;
  symbol: string;
}

export type Asset = KucoinAsset[];
