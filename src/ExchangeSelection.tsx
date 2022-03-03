import { Button, Container, Divider, Typography } from "@mui/material";

import BarLoader from "./BarLoader";
import BasicSelect from "./Select";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function ExchangeSelection() {
  const [loading, setLoading] = useState(false);
  const [exchange, setExchange] = useState("");
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [passphrase, setPassphrase] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      exchange: exchange,
      name: name,
      apiKey: apiKey,
      apiSecret: apiSecret,
      passphrase: passphrase,
    };
    const resp = await fetch("/api/newExchange", {
      method: "post",
      body: JSON.stringify(data),
    });
    const status = await resp.status;
    if (status == 200) {
      console.log(await resp.json());
    }
    setLoading(false)
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
      <form onSubmit={(e) => handleSubmit(e)}>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography component={"h3"} fontSize={30}>
            Connect an exchange using ap API key:
          </Typography>
          <Divider sx={{ marginBlockEnd: "30px" }} />
          <BasicSelect
            name="Exchange"
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
            values={[{ title: "Kucoin" }]}
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            sx={{ flexGrow: 1, marginBlock: 5 }}
          />
          <TextField
            id="API Key"
            label="API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="API Secret"
            label="API Secret"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="Passphrase"
            label="Passphrase"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
        </Box>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            display: "block",
            marginInline: "auto",
            textTransform: "Capitalize",
            fontWeight: "bold",
          }}
        >
          Connect
        </Button>
      </form>
    </Container>
  );
}
