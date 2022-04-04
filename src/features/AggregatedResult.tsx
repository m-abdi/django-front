import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function AggregatedResult({
  data,
}: {
  data: {
    title: string;
    description: string;
    icon: JSX.Element;
    color: string;
    backgroundColor: string;
  };
}) {
  return (
    <Paper
      sx={{
        p: 3,
        display: "flex",
        flexFlow: "column noWrap",
        alignItems: "center",
        inlineSize: 300,
        blockSize: 200,
        boxShadow: 7,
        position: "relative",
      }}
    >
      {/* icon box */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: 5,
          fontSize: 40,
          backgroundColor: data.backgroundColor,
          inlineSize: 50,
          blockSize: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex",
          pl: 0.5,
          borderRadius: 3,
          color: data.color,
        }}
      >
        {data.icon}
      </Box>

      <Typography component={"h4"} variant="h6">
        123
      </Typography>
      <Typography component={"h4"} variant="h5">
        {data.title}
      </Typography>
      <Typography component={"h4"} variant="h5" sx={{ textAlign: "center" }}>
        {data.description}
      </Typography>
    </Paper>
  );
}
