import { Divider, Fab, Typography } from "@mui/material";

import BarLoader from "../../src/BarLoader";
import { Box } from "@mui/system";
import ExchangeSelection from "../../src/ExchangeSelection";
import ExchangesTable from "../../src/ExchangesTable";
import FabAdd from "~/src/FabAdd";
import FabClose from "~/src/FabClose";
import NetworkError from "~/src/NetworkError";
import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useUser from "~/src/userHook";

export default function Exchanges() {
  const { user, isLoading, isError } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [exchangeDisplay, setExchangeDisplay] = useState("none");
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/users/login");
    },
  });
  if (status === "loading") {
    return <BarLoader />;
  }
  const handleNewExchange = () => {
    setExchangeDisplay("block");
  };
  const handleNoExchange = () => {
    setExchangeDisplay("none");
  };
  return true ? (
    <BarLoader />
  ) : isError ? (
    <NetworkError/>
  ) : (
    user && (
      <div>
        {exchangeDisplay === "none" ? (
          <FabAdd handleClick={handleNewExchange} text="Connect new account" />
        ) : (
          <FabClose handleClick={handleNoExchange} />
        )}
        <ExchangeSelection display={exchangeDisplay} setLoading={setLoading} />
        <Divider sx={{ my: 6, display: { xs: "none", md: "block" } }} />
        <Box sx={{ padding: 2 }}>
          <Typography component={"h2"} sx={{ fontSize: "25px !important" }}>
            Connected Accounts
          </Typography>
          <ExchangesTable rows={user.exchanges} />
        </Box>
      </div>
    )
  );
}
