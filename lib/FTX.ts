import { RestClient } from "ftx-api";

export default new RestClient(
  process.env.FTX_API_KEY,
  process.env.FTX_API_SECRET
);
