import { Box, Container } from "@mui/material";
import React, { useContext } from "react";

import BarLoader from "../../src/BarLoader";
import CurrentUser from "~/src/CurrentUserContext";
import FTXClient from "lib/FTX";
import NetworkError from "~/src/NetworkError";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/users/login");
    },
  });
  if (status === "loading") {
    return <BarLoader />;
  }
  const currentUser = useContext(CurrentUser);
  return (
    <Box>
      dd
    </Box>
  );
}
