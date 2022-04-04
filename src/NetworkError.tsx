import { Box, Container } from "@mui/material";

import Image from "next/image";
import React from "react";

export default function NetworkError() {
  return (
    <Box
      sx={{
        marginInline: "calc((100vw - 600px) / 2)",
        marginBlock: "calc((100vh - 600px) / 2)",
        inlineSize: "400px",
        blockSize: 400,
      }}
    >
      <img src={"/images/error.png"} width={400} height={400} />
    </Box>
  );
}
