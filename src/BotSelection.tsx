import { Button, Container, Divider, Typography } from "@mui/material";

import BarLoader from "./BarLoader";
import BasicSelect from "./Select";
import { Box } from "@mui/system";
import Link from "src/Link";
import React from "react";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BotSelection(props: any) {
  const router = useRouter();

  const [account, setAccount] = useState(
    router.query.account ? router.query.account : ""
  );
  const [bot, setBot] = useState("DCA");
  const [pair, setPair] = useState("");
  const [baseOrderSize, setBaseOrderSize] = useState("");
  const [tp, setTP] = useState("");
  const [priceDeviation, setPriceDeviation] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.query.account && setAccount(router.query.account);
  }, [router]);

  const handleSubmit = async () => {
    const data = {
      account: account,
      bot: bot,
      tp: tp,
      baseOrderSize: baseOrderSize,
      pair: pair,
      priceDeviation: priceDeviation,
    };
    props.setLoading(true);
    const resp = await fetch("/api/newBot", {
      method: "post",
      body: JSON.stringify(data),
    });
    const status = await resp.status;
    if (status == 200) {
      console.log(await resp.json());
      router.push(`/users/bots?account=${name}`);
    }
    setLoading(false);
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
        display: props.display
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
            mb={4}
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
          />
          <BasicSelect
            name="Bot"
            values={[{ title: "DCA" }]}
            sx={{ marginBlock: 5 }}
            mb={4}
            value={bot}
            onChange={(e: any) => setBot(e.target.value)}
          />
          {bot === "DCA" && (
            <Box>
              <Typography component={"h4"} fontSize={25}>
                Parameters
              </Typography>
              <Divider sx={{ marginBlock: "10px" }} />
              <BasicSelect
                name="Pair"
                margin="normal"
                value={pair}
                onChange={(e: any) => setPair(e.target.value)}
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
                value={baseOrderSize}
                onChange={(e) => setBaseOrderSize(e.target.value)}
                sx={{
                  inlineSize: { xs: "100%", md: "45%" },
                  marginInlineEnd: 3,
                }}
              />
              <TextField
                id="Target Profit(%)"
                label="Target Profit(%)"
                variant="outlined"
                margin="normal"
                value={tp}
                onChange={(e) => setTP(e.target.value)}
                sx={{
                  inlineSize: { xs: "100%", md: "45%" },
                  marginInlineEnd: 3,
                }}
              />
              <TextField
                id="Price Deviation (%)"
                label="Price Deviation (%)"
                variant="outlined"
                margin="normal"
                value={priceDeviation}
                onChange={(e) => setPriceDeviation(e.target.value)}
                sx={{
                  inlineSize: { xs: "100%", md: "45%" },
                  marginInlineEnd: 3,
                }}
              />
            </Box>
          )}
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
          <Link href="/users/dashboard">
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
          </Link>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleSubmit}
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
