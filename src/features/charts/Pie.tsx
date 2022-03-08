import { DatabasePrices } from "src/Types";
import { Exchanges as ExchangesType } from "../../Types";
import { KucoinAsset } from "../../Types";
import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import { match } from "assert";
import usePrices from "src/logic/prices";

const colors = ["#3c69c2", "#c92230", "#82ca9d", "#79c922"];

function kucoinData(assets: KucoinAsset[], prices: DatabasePrices[]) {
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
  let assetsArray = [];
  let i = 0;
  console.log(prices);

  for (const [key, value] of Object.entries(accumulatedAssets)) {
    for (let p of prices) {
      if (p.symbol === key + "USDT" || key === "USDT") {
        assetsArray.push({
          title: key,
          value:
            p.symbol === key + "USDT"
              ? value.balance * parseFloat(p.price)
              : 1 * value.balance,
          color: colors[i],
        });
        i++;
        break;
      }
    }
  }

  return assetsArray;
}

export default function Pie({
  assets,
  exchange,
  prices,
}: {
  assets: KucoinAsset[];
  exchange: ExchangesType;
  prices: DatabasePrices[];
}) {
  const data = kucoinData(assets, prices);

  console.log(data);

  return (
    <PieChart
      key={exchange}
      data={data}
      animate={true}
      label={({ dataEntry }) => dataEntry.title}
      style={{ fontSize: "5pt" }}
    />
  );
}
