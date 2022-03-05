import { Box, Fab, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function FabAdd({
  handleClick,
  text,
}: {
  handleClick: any;
  text: string;
}) {
  return (
    <Box id="FabAdd">
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          position: { xs: "fixed", md: "static" },
          bottom: { xs: "10vh", md: "auto" },
          right: { xs: "3vw", md: "auto" },
          zIndex: 100,
        }}
      >
        <AddIcon />
      </Fab>
      <Typography
        component={"h1"}
        sx={{
          display: { xs: "none", md: "inline" },
          textAlign: "center",
          mx: 5,
          fontWeight: "bold",
          fontSize: 23,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
