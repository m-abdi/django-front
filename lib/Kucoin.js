const api = require("kucoin-node-api");

export default function main(apiKey, apiSecret, passphrase) {
  const config = {
    apiKey: apiKey,
    secretKey: apiSecret,
    passphrase: passphrase,
    environment: "live",
  };

  api.init(config);
  return api;
}
