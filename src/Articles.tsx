import { Divider, Typography } from "@mui/material";

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import FlexRowStacked from "./FlexRowStacked";
import MediaCard from "./ArticleCard";
import React from "react";

const topArticles = [
  {
    id: "3242",
    title: "No being affecting by emotion",
    text: "All orders are closed with a profit...",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
  {
    id: "3242",
    title: "The bot never gets tired.",
    text: "NO fatigue",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
  {
    id: "3242",
    title: "None of the orders will be closed at a loss.",
    text: "You always have some capital to trade.",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
  {
    id: "3242",
    title: "save your time",
    text: "Leave everything to Botland auto trader bot.",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
  {
    id: "3242",
    title: "Save your money",
    text: "save your capital",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
  {
    id: "3242",
    title: "The cost of rent is very low.",
    text: "Payment for one or more months.",
    image: "/images/testimonial-image-611952fa9b178.jpg",
  },
];
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
