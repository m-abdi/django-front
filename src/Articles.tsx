import { Divider, Typography } from "@mui/material";

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import FlexRowStacked from "./FlexRowStacked";
import MediaCard from "./features/ArticleCardV";
import React from "react";

function Articles() {
  return (
    <Container maxWidth="xl">
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
      }}>
        <Typography
          component={"h2"}
          fontSize={"30pt"}
          sx={{alignSelf: "flex-start"}}
        >
          Articles
        </Typography>
        <Divider flexItem/>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
            margin: 0
          }}
        >
          {topArticles.map((a) => (
            <MediaCard image={a.image} alt="" title={a.title} text={a.text} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Articles;
