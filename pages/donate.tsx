import { Container } from "@mui/material";
import React from "react";
import ResponsiveNavBar from "../src/partials/Navbar";
import getAppInfo from "../src/logic/getAppInfo";

export default function donate(props: any) {
  return (
    <ResponsiveNavBar
    {...props}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: "url(/images/donate1.jpg)",
          minBlockSize: "100vh",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.2"
        }}
      ></Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const appInfo = await getAppInfo(locale);
  
  return {
    props: { ...appInfo },
  };
}
