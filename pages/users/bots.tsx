import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";

import { BarChart } from "@mui/icons-material";
import BotSelection from "../../src/BotSelection";
import BotsTable from "~/src/BotsTable";
import { Box } from "@mui/system";
import ExchangesTable from "~/src/ExchangesTable";
import FabAdd from "~/src/FabAdd";
import FabClose from "~/src/FabClose";
import NetworkError from "~/src/NetworkError";
import useUser from "~/src/logic/userHook";
import useWallet from "src/logic/walletHook"

export default function Bots() {
  const { user, isLoading, isError } = useUser();
  const [botDisplay, setBotDisplay] = useState("none");
  const [loading, setLoading] = useState(false);
  const {wallet, isWalletLoading, isWalletError} = useWallet()
  const handleNewBot = () => {
    setBotDisplay("block");
  };
  const handleNoBot = () => {
    setBotDisplay("none");
  };
  return isLoading || loading ? (
    <BarChart />
  ) : isError ? (
    <NetworkError />
  ) : (
    user && (
      <>
        {botDisplay === "none" ? (
          <FabAdd handleClick={handleNewBot} text="Activate new bot" />
        ) : (
          <FabClose handleClick={handleNoBot} />
        )}
        <BotSelection wallet={wallet} display={botDisplay} setLoading={setLoading} user={user} />
        <Divider sx={{ my: 6, display: { xs: "none", md: "block" } }} />
        <Box sx={{ padding: 2 }}>
          <Typography component={"h2"} sx={{ fontSize: "25px !important" }}>
            Activated Bots
          </Typography>
          <BotsTable rows={user.bots} />
        </Box>
      </>
    )
  );
}
