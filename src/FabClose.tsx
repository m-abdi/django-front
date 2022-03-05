import DifferenceIcon from "@mui/icons-material/Close";
import { Fab } from "@mui/material";
import React from "react";

export default function FabClose({ handleClick }: { handleClick: any }) {
  return (
    <Fab
    id="FabClose"
      color="primary"
      aria-label="add"
      onClick={handleClick}
      sx={{
        position: { xs: "fixed", md: "static" },
        bottom: { xs: "10vh", md: "auto" },
        right: { xs: "3vw", md: "auto" },
      }}
    >
      <DifferenceIcon/>
    </Fab>
  );
}
