import { Button, Container, Divider, Typography } from "@mui/material";

import BarLoader from "./BarLoader";
import BasicSelect from "./Select";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BotSelection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const resp = await fetch("/api/newExchange", {
      method: "post",
    });
  };
  return loading ? (
    <BarLoader />
  ) : (
    <Container
      maxWidth="lg"
      sx={{
        border: 4,
        borderColor: "primary.main",
        borderRadius: 5,
        boxShadow: 5,
        padding: 5,
      }}
    >
      <form onSubmit={handleSubmit}>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography component={"h3"} fontSize={30}>
            Connect your account to one of our bots:
          </Typography>
          <Divider sx={{ marginBlockEnd: "30px" }} />
          <BasicSelect
            name="Account"
            values={[{ title: "Kucoin" }]}
            sx={{ marginBlock: 5 }}
          />
          <BasicSelect
            name="Bot"
            values={[{ title: "DCA" }]}
            sx={{ marginBlock: 5 }}
          />
          <Box>
            <Typography component={"h4"} fontSize={15}>
              Parameters
            </Typography>
            <Divider sx={{ marginBlock: "10px" }} />
            <BasicSelect
              name="Pair"
              margin="normal"
              sx={{ marginBlockEnd: 4 }}
              values={[
                { title: "BTCUSDT" },
                { title: "ETHUSDT" },
                { title: "LTCUSDT" },
                { title: "ADAUSDT" },
              ]}
            />
            <TextField
              id="Base Order Size (USDT)"
              label="Base Order Size (USDT)"
              variant="outlined"
              margin="normal"
              sx={{ inlineSize: { xs: "100%", md: "45%" }, marginInlineEnd: 3 }}
            />
            <TextField
              id="Target Profit(%)"
              label="Target Profit(%)"
              variant="outlined"
              margin="normal"
              sx={{ inlineSize: { xs: "100%", md: "45%" }, marginInlineEnd: 3 }}
            />
            <TextField
              id="Price Deviation (%)"
              label="Price Deviation (%)"
              variant="outlined"
              margin="normal"
              sx={{ inlineSize: { xs: "100%", md: "45%" }, marginInlineEnd: 3 }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginInlineStart: "auto",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "space-around",
            inlineSize: "220px",
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            size="large"
            sx={{
              textTransform: "Capitalize",
              fontWeight: "bold",
              marginInline: 2,
            }}
          >
            Skip
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            sx={{
              textTransform: "Capitalize",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}
