import { Box, Typography } from "@mui/material";

import { Container } from "@mui/material";
import React from "react";
import ResponsiveNavBar from "../src/partials/Navbar";
import getAppInfo from "../src/logic/getAppInfo";

export default function aboutUs(props: any) {
  return (
    <ResponsiveNavBar {...props}>
      <Container maxWidth="lg" sx={{ mt: 15, minBlockSize: "70vh" }}>
        <Typography component={"h1"} variant="h3">
          About Us
        </Typography>
        <Typography component={"p"} variant="body1">
          {props.about_us}
        </Typography>
      </Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const appInfo = await getAppInfo(locale);

  return {
    props: { ...appInfo },
  };
}
