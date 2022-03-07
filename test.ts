export interface KucoinAsset {
  id: string;
  currency: string; //   "USDT"
  type: string; //   "trade"
  balance: string;
  available: string;
  holds: string;
}
function kucoinData(assets: KucoinAsset[]) {
  let noneZeroAssets: KucoinAsset[] = assets.filter(
    (e) => !(parseFloat(e.balance) === 0)
  );
  let accumulatedAssets: { [key: string]: { balance: number } } = {};

  for (let e of noneZeroAssets) {
    if (!accumulatedAssets[e.currency]) {
      accumulatedAssets[e.currency] = { balance: 0 };
    }
    accumulatedAssets[e.currency].balance =
      parseFloat(e.balance) + accumulatedAssets[e.currency].balance;
  }
  return accumulatedAssets
}

kucoinData([
  {
    id: "61fe94f1ec92580001a18b2e",
    currency: "ETH",
    type: "trade",
    balance: "0.0059346",
    available: "0",
    holds: "0.0059346",
  },
  {
    id: "61fe51c292da1500010c98ee",
    currency: "USDT",
    type: "main",
    balance: "2",
    available: "2",
    holds: "0",
  },
  {
    id: "61fe5946ca360b0001c80a7b",
    currency: "USDT",
    type: "trade",
    balance: "1.94478387",
    available: "1.94478387",
    holds: "0",
  },
  {
    id: "6201201f7d597e00016607ba",
    currency: "BNB",
    type: "trade",
    balance: "0",
    available: "0",
    holds: "0",
  },
]);
