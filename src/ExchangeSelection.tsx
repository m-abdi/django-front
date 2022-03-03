import { Button, Container, Divider, Typography } from "@mui/material";

import BasicSelect from "./Select";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";

export default function ExchangeSelection() {
  return (
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
      <form>
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
            values={[{ title: "Kucoin" }]}
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            sx={{ flexGrow: 1, marginBlock: 5 }}
          />
          <TextField
            id="API Key"
            label="API Key"
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="API Secret"
            label="API Secret"
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
          <TextField
            id="Passphrase"
            label="Passphrase"
            variant="outlined"
            sx={{ marginBlockEnd: 5 }}
          />
        </Box>
        <Button color="secondary" variant="contained" size="large" sx={{display: "block", marginInline: "auto", textTransform: "Capitalize", fontWeight: "bold"}}>Connect</Button>
      </form>
    </Container>
  );
}
