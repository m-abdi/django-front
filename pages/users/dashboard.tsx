import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import UsersAppbar from "../../src/PanelAppbar";
import UsersSessionRequired from "../../src/UsersSessionRequired";
import getAppInfo from "../../src/logic/getAppInfo";
import { signOut } from "next-auth/react";

export default function dashboard(props: any) {
  return (
    <UsersSessionRequired>
      <UsersAppbar {...props}>
        <Box sx={{ blockSize: "70vh" }}>sfjosidfo</Box>
      </UsersAppbar>
      <Button onClick={() => signOut()} size="large">log out</Button>
    </UsersSessionRequired>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const appInfo = await getAppInfo(locale);

  return {
    props: { ...appInfo },
  };
}
