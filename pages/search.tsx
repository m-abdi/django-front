import { Container } from "@mui/material";
import React from "react";
import ResponsiveNavBar from "../src/partials/Navbar";
import getAppInfo from "../src/logic/getAppInfo";

export default function search(props: any) {
  return (
    <ResponsiveNavBar {...props}>
      <Container maxWidth="lg">Search box</Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const appInfo = await getAppInfo(locale);
  return {
    props: { ...appInfo },
  };
}
