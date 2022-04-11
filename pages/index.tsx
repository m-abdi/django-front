import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Flickity from "react-flickity-component";
import Paper from "@mui/material/Paper";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Stack from "@mui/material/Stack";
import neumorphism from "../src/css/neumorphism.module.css";
import { styled } from "@mui/material/styles";
import useFoods from "../src/logic/useFoods";

const FoodPaper = styled("div")({});
const foodsData = [
  {
    id: 1,
    name: "Pizza",
    price: "10",
    description:
      "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.",
  },
  {
    id: 2,
    name: "Burger",
    price: "20",
    description:
      "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
  },
  {
    id: 3,
    name: "Pasta",
    price: "30",
  },
];
export default function landingPage() {
  // const { foodsData, foodsDataIsLoading, foodsDataIsError } = useFoods();
  return (
    <>
      <AppBar color="transparent">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <div></div>
          <Typography component={"h1"} variant="h3" fontWeight="bolder">
            Django <span style={{ color: "greenyellow" }}>Eats</span>
          </Typography>
          <IconButton>
            <ShoppingCartRoundedIcon sx={{ inlineSize: 30, blockSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* hero view */}
      <Box
        sx={{
          blockSize: "100vh",
          backgroundColor: "primary.main",
          backgroundImage:
            "url(/images/left-hero-image.svg), url(/images/right-hero-image.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left, right",
        }}
      >
        <Toolbar />

        <Container maxWidth="lg" sx={{ my: "calc((100vh - 500px) / 2)" }}>
          <Box sx={{ inlineSize: "100%", blockSize: "100%" }}>
            {foodsData && (
              <Flickity options={{ autoPlay: true, contain: true }}>
                {foodsData.map((fd) => (
                  <div className="carousel-cell" key={fd.id}>
                    <Paper
                      sx={{
                        blockSize: 400,
                        inlineSize: 300,
                        borderRadius: 6,
                        boxShadow: 7,
                        display: "flex",
                        flexDirection: "column",
                        mx: 4,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundImage: `url(${fd?.image})`,
                          inlineSize: 300,
                          blockSize: 400,
                        }}
                      ></Box>
                      {/* title and short text box */}
                      <Box
                        sx={{
                          px: 2,
                          pb: 1,
                          flexGrow: 1,
                          blockSize: "40% !important",
                        }}
                      >
                        <Stack direction={"row"} justifyContent="space-between">
                          <Typography
                            component={"h2"}
                            variant="h3"
                            fontWeight={"bold"}
                          >
                            {fd.name}
                          </Typography>
                          <Typography
                            fontWeight={"bold"}
                            component={"h2"}
                            variant="h5"
                          >
                            {fd.price}$
                          </Typography>
                        </Stack>
                      </Box>
                      <Button
                        size="large"
                        variant="contained"
                        color="info"
                        sx={{ display: "block", mx: "auto", mb: 1 }}
                      >
                        Order
                      </Button>
                    </Paper>
                  </div>
                ))}
              </Flickity>
            )}
          </Box>{" "}
        </Container>
      </Box>
    </>
  );
}
