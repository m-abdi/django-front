import { Asset as AssetType, Exchanges as ExchangesType } from "../../Types";
import { Grid, Paper, Typography } from "@mui/material";

import BarLoader from "../../BarLoader";
import {Bots as BotsType} from "src/Types"
import { Box } from "@mui/system";
import DenseTable from "../../features/charts/tables/BotsSummary";
import Image from "next/image";
import NetworkError from "../../NetworkError";
import Pie from "../../features/charts/Pie";
import React from "react";
import usePrices from "src/logic/prices";

export default function ConnectedExchange({
  name,
  exchange,
  assets,
  bots
}: {
  name: string;
  exchange: ExchangesType;
  assets: AssetType;
  bots: BotsType
}) {
  const { prices, isLoading, isError } = usePrices(exchange);

  return isLoading ? (
    <BarLoader />
  ) : isError ? (
    <NetworkError />
  ) : (
    <Paper
      sx={{
        inlineSize: { xs: 350, md: 400 },
        padding: 1,
        boxShadow: 3,
        blockSize: 400,
        marginLeft: { xs: "auto", md: 0 },
        marginRight: "auto",
      }}
    >
      <Grid container justifyContent="center" spacing={2} height="330px">
        <Grid item xs={5}>
          <Box>
            <Typography component={"h3"} variant="h5">
              {name}
            </Typography>
            <Box
              sx={{
                border: "3 solid white",
                borderRadius: 4,
                backgroundImage: `url(/images/${exchange}.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                inlineSize: 140,
                blockSize: 140,
                m: "auto",
                mt: 3
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Pie exchange={exchange} assets={assets} prices={prices} />
        </Grid>
        <Grid item xs={12} sx={{ overflow: "auto", blockSize: "40%", inlineSize: "100%" }}>
          <Typography component={"h3"} variant="h6">
            Active Bots
          </Typography>
          <DenseTable bots={bots} />
        </Grid>
      </Grid>
    </Paper>
  );
}
