import { RestClient } from "ftx-api";

// main account
export default new RestClient(
  process.env.FTX_API_KEY,
  process.env.FTX_API_SECRET
);
// subaccounts
export function giveMeFTXSubaccount(subAccountName: string) {
  return new RestClient(process.env.FTX_API_KEY, process.env.FTX_API_SECRET, {
    subAccountName: subAccountName,
  });
}
