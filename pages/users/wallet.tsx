import BarLoader from "~/src/BarLoader";
import { Box } from "@mui/system";
import NetworkError from "~/src/NetworkError";
import type { NextPage } from "next";
import React from "react";
import useWallet from "~/src/walletHook";

const Wallet: NextPage = () => {
  const { wallet, isLoading, isError } = useWallet();

  return isLoading ? (
    <BarLoader />
  ) : isError ? (
    <NetworkError />
  ) : (
    wallet && wallet.map((a:any) => <Box key={a.total}>{a.total}</Box>)
  );
};

export default Wallet;
