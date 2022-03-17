import { Button, Container, Dialog, DialogTitle, Divider, Typography } from "@mui/material";

import BarLoader from "./BarLoader";
import BasicSelect from "./Select";
import { Box } from "@mui/system";
import Link from "./Link";
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
  const [pairs, setPairs] = useState([]);
  const [baseOrderSize, setBaseOrderSize] = useState(undefined);
  const [tp, setTP] = useState(undefined);
  const [priceDeviation, setPriceDeviation] = useState(undefined);
  const [coinMaximum, setCoinMaximum] = useState(undefined);
  const [botPrice, setBotPrice] = useState(false);
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
      coinMaximum: coinMaximum,
      pairs: pairs,
      priceDeviation: priceDeviation,
    };
    if (parseFloat(props.wallet[0]["free"]) > 1) {
      props.setLoading(true);
    const resp = await fetch("/api/newBot", {
      method: "post",
      body: JSON.stringify(data),
    });
    const status = await resp.status;
    if (status == 200) {
      console.log(await resp.json());
      router.push(`/users/dashboard`);
    }
    setLoading(false);
    } else {
      setBotPrice(true)
    }
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
        display: props.display,
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
          <Dialog open={botPrice} onClose={()=>setBotPrice(false)} >
            <DialogTitle sx={{testAlign: "center"}}>
              Increase your balance first !
            </DialogTitle>
            </Dialog>
          <Divider sx={{ marginBlockEnd: "30px" }} />
          <BasicSelect
            name="Account"
            values={
              props.user.exchanges
                ? props.user.exchanges.map((e) => ({
                    title: e.name,
                  }))
                : []
            }
            mb={4}
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
          />
          <BasicSelect
            name="Bot"
            values={[{ title: "DCA" }]}
            sx={{ mt: 5, mb: 1 }}
            mb={4}
            value={bot}
            onChange={(e: any) => setBot(e.target.value)}
          />
          {bot === "DCA" && (
            <Box>
              <Typography component={"p"} variant="body2" color={"red"}>  0.5  (USDT) / day</Typography>
              <Typography component={"h4"} fontSize={25}>
                Parameters
              </Typography>
              <Divider sx={{ marginBlock: "10px" }} />
              <BasicSelect
                name="Pairs"
                margin="normal"
                multiple={true}
                value={pairs}
                onChange={(e: any) => setPairs(e.target.value)}
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
                onChange={(e) => setBaseOrderSize(parseFloat(e.target.value))}
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
                onChange={(e) => setTP(parseFloat(e.target.value))}
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
                onChange={(e) => setPriceDeviation(parseFloat(e.target.value))}
                sx={{
                  inlineSize: { xs: "100%", md: "45%" },
                  marginInlineEnd: 3,
                }}
              />
              <TextField
                id="coinMaximum"
                label="Coin Maximum (USDT)"
                variant="outlined"
                margin="normal"
                value={coinMaximum}
                onChange={(e) => setCoinMaximum(parseFloat(e.target.value))}
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
            mt: 3,
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
