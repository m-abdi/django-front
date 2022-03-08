import { Divider, Grid, Paper, Typography } from "@mui/material";

import BarLoader from "~/src/BarLoader";
import { Box } from "@mui/system";
import Image from "next/image";
import NetworkError from "~/src/NetworkError";
import type { NextPage } from "next";
import React from "react";
import useUser from "src/logic/userHook";
import useWallet from "~/src/logic/walletHook";

const Wallet: NextPage = () => {
  const { wallet, isLoading, isError } = useWallet();
  const { user, isUserLoading, isUserError } = useUser();

  return isLoading ? (
    <BarLoader />
  ) : isError ? (
    <NetworkError />
  ) : (
    wallet && (
      <>
        <Box sx={{ p: 1 }}>
          <Typography component={"h2"} variant="h5">
            Assets
          </Typography>
          <Divider sx={{ mb: 4 }} />{" "}
          {wallet.map((a: any) => (
            <Paper
              sx={{
                blockSize: 400,
                inlineSize: 300,
                boxShadow: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component={"h4"}
                variant="h4"
                sx={{
                  border: "1px solid black",
                  borderTop: "none",
                  p: 1.5,
                  borderRadius: "5px 5px 70px 70px",
                  backgroundColor: "info.main",
                  color: "white",
                }}
              >
                {a.coin}
              </Typography>
              <Image
                src={`/images/${a.coin}.png`}
                width="200px"
                height="200px"
              />

              <Typography
                component={"h4"}
                variant="h4"
                key={a.coin}
                sx={{ my: 1, textAlign: "center" }}
              >
                {" "}
                amount:<br></br>
                {a.free}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ p: 1 }}>
          <Typography component={"h2"} variant="h5">
            Withdraw
          </Typography>
          <Divider sx={{ mb: 4 }} />{" "}
          {user ? (
            Object.entries(user.wallet)
              .map((p) => ({
                coin: p[0],
                wallets: p[1],
              }))
              .map((e) => (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
                    <Typography component={"h4"} variant="h4">
                      {e.coin}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={8} sx={{ textAlign: "center" }}>
                    {Object.entries(e.wallets).map((we) => (
                      <Typography component={"h5"} variant="h5">
                        {we[0]} ==> {we[1]}
                      </Typography>
    
                    ))}
                  </Grid>
                </Grid>
              ))
          ) : isUserLoading ? (
            <BarLoader />
          ) : (
            isUserError && <NetworkError />
          )}
        </Box>
      </>
    )
  );
};

export default Wallet;
