import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";

import BarLoader from "../../src/BarLoader";
import ConnectedExchange from "../../src/partials/dashboard/ConnectedExchange";
import FTXClient from "lib/FTX";
import NetworkError from "~/src/NetworkError";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useUser from "~/src/logic/userHook";

export default function Dashboard() {
  const router = useRouter();
  const { user, isLoading, isError } = useUser();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/users/login");
    },
  });
  if (status === "loading") {
    return <BarLoader />;
  }
  return isLoading ? (
    <BarLoader />
  ) : isError ? (
    <NetworkError />
  ) : (
    <Box>
      <Typography component={"h2"} variant="h6">Connected Exchanges</Typography>
      <Divider variant="fullWidth" flexItem sx={{mb: 3}}/>
      {user.exchanges.map((e) => (
        <ConnectedExchange name={e.name} exchange={e.exchange} assets={e.balance} bots={user.bots.filter((b)=> b.account === e.name)} />
      ))}
    </Box>
  );
}
