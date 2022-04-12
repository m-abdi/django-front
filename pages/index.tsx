import {
  AppBar,
  Badge,
  IconButton,
  InputAdornment,
  MenuItem,
  Popper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Flickity from "react-flickity-component";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import Paper from "@mui/material/Paper";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Stack from "@mui/material/Stack";
import { json } from "stream/consumers";
import neumorphism from "../src/css/neumorphism.module.css";
import { styled } from "@mui/material/styles";
import useFoods from "../src/logic/useFoods";

// const foodsData = [
//   {
//     id: "1",
//     name: "Pizza",
//     price: "10",
//     description:
//       "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.",
//     image: "/images/Pizza.jpg",
//   },
//   {
//     id: "2",
//     name: "Burger",
//     price: "20",
//     image: "/images/Burger.jpg",
//     description:
//       "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
//   },
//   {
//     id: "3",
//     name: "Pasta",
//     price: "30",
//     image: "/images/Pasta.jpg",
//   },
//   {
//     id: "4",
//     name: "Salad",
//     price: "40",
//     image: "/images/Salad.jpg",
//   },
//   {
//     id: "5",
//     name: "Soup",
//     price: "50",
//     image: "/images/Soup.jpg",
//   },
// ];
export default function landingPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shoppingBasket, setShoppingBasket] = useState({});
  const { foodsData, foodsDataIsLoading, foodsDataIsError } = useFoods();
  const handleShoppingBasketClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleAddToBasket = (foodData: any) => {
    if (foodData.id in shoppingBasket) {
      localStorage.setItem(
        "shoppingBasket",
        JSON.stringify({
          ...shoppingBasket,
          [foodData.id]: {
            ...shoppingBasket[foodData.id],
            qty: shoppingBasket[foodData.id].qty + 1,
          },
        })
      );

      setShoppingBasket({
        ...shoppingBasket,
        [foodData.id]: {
          ...shoppingBasket[foodData.id],
          qty: shoppingBasket[foodData.id].qty + 1,
        },
      });
    } else {
      localStorage.setItem(
        "shoppingBasket",
        JSON.stringify({
          ...shoppingBasket,
          [foodData.id]: {
            ...foodData,
            qty: 1,
          },
        })
      );
      setShoppingBasket({
        ...shoppingBasket,
        [foodData.id]: {
          ...foodData,
          qty: 1,
        },
      });
    }
  };
  const handleBuy = async () => {
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/shop/newOrder/",
      {
        method: "post",
        body: JSON.stringify({
          foods: Object.keys(shoppingBasket),
          data: Object.values(shoppingBasket),
        }),
        headers: {
          "Content-Type": "application/json",
        }
      },
      
    );
    if (resp.ok) {
      setAnchorEl(null);
      setShoppingBasket({});
      localStorage.removeItem("shoppingBasket");
    } else {
      console.log("failed");
    }
  };
  const handleItemDelete = (itemId: string) => {
    if (itemId in shoppingBasket) {
      const newShoppingBasket = { ...shoppingBasket };
      delete newShoppingBasket[itemId];
      localStorage.setItem("shoppingBasket", JSON.stringify(newShoppingBasket));
      setShoppingBasket(newShoppingBasket);
    }
  };
  const handleItemQuantity = (itemId: string, item: any, type: string) => {
    if (itemId in shoppingBasket && type === "add") {
      const newShoppingBasket = { ...shoppingBasket };
      newShoppingBasket[itemId] = {
        ...newShoppingBasket[itemId],
        qty: item.qty + 1,
      };
      localStorage.setItem("shoppingBasket", JSON.stringify(newShoppingBasket));

      setShoppingBasket(newShoppingBasket);
    } else if (itemId in shoppingBasket && type === "remove") {
      const newShoppingBasket = { ...shoppingBasket };
      newShoppingBasket[itemId] = {
        ...newShoppingBasket[itemId],
        qty: item.qty - 1,
      };
      localStorage.setItem("shoppingBasket", JSON.stringify(newShoppingBasket));
      setShoppingBasket(newShoppingBasket);
    }
  };

  const shoppingBasketOpen = Boolean(anchorEl);
  const popperId = shoppingBasketOpen ? "shopping-popper" : undefined;
  useEffect(() => {
    setShoppingBasket(
      localStorage.getItem("shoppingBasket")
        ? JSON.parse(localStorage.getItem("shoppingBasket"))
        : {}
    );
  }, []);

  return (
    <>
      <AppBar color="transparent">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <div></div>
          <Typography component={"h1"} variant="h3" fontWeight="bolder">
            Django <span style={{ color: "greenyellow" }}>Eats</span>
          </Typography>
          <Badge
            badgeContent={Object.keys(shoppingBasket).length}
            color="success"
            aria-describedby={popperId}
            onClick={handleShoppingBasketClick}
            sx={{ cursor: "pointer" }}
          >
            <ShoppingCartRoundedIcon sx={{ inlineSize: 30, blockSize: 30 }} />
          </Badge>
          {Object.entries(shoppingBasket).length > 0 ? (
            <Popper
              id={popperId}
              open={shoppingBasketOpen}
              anchorEl={anchorEl}
              style={{ zIndex: 1200 }}
            >
              <Paper sx={{ py: 2 }}>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ fontWeight: "bold" }}>
                        <TableCell sx={{ fontWeight: "bold" }}>Item</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          Price
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          QTY
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          Total
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(shoppingBasket).map((item) => (
                        <TableRow
                          key={item[0]}
                          component="th"
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell sx={{ fontWeight: "bold" }}>
                            {item[1].name}
                          </TableCell>
                          <TableCell align="center">{item[1].price}</TableCell>
                          <TableCell align="center">
                            <TextField
                              size="small"
                              variant="standard"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <IndeterminateCheckBoxRoundedIcon
                                      onClick={() =>
                                        handleItemQuantity(
                                          item[0],
                                          item[1],
                                          "remove"
                                        )
                                      }
                                      sx={{ cursor: "pointer" }}
                                    />
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <AddBoxRoundedIcon
                                      onClick={() =>
                                        handleItemQuantity(
                                          item[0],
                                          item[1],
                                          "add"
                                        )
                                      }
                                      sx={{ cursor: "pointer" }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              value={item[1].qty}
                              sx={{ inlineSize: 80, textAlign: "center" }}
                              // onChange={(e) => {
                              //   updateItemQuantity(item.id, item);
                              // }}
                            ></TextField>
                          </TableCell>
                          <TableCell align="center">
                            {item[1].qty * item[1].price}
                          </TableCell>
                          <TableCell align="center">
                            <RemoveCircleOutlineRoundedIcon
                              color="error"
                              sx={{
                                cursor: "pointer",
                              }}
                              onClick={(e) => handleItemDelete(item[0])}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mx: "auto", display: "block", mt: 1 }}
                  onClick={() => {
                    handleBuy();
                  }}
                >
                  Order
                </Button>
              </Paper>
            </Popper>
          ) : (
            <Popper
              id={popperId}
              open={shoppingBasketOpen}
              anchorEl={anchorEl}
              style={{ zIndex: 1200 }}
            >
              {" "}
              <Paper sx={{ p: 3 }}>You didn't choose any food</Paper>
            </Popper>
          )}
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
        <img
          src="/images/order-now.png"
          alt="order now"
          height={"70px"}
          width={"530px"}
          style={{
            position: "absolute",
            left: "calc((100vw - 530px) / 2)",
            marginTop: 20,
          }}
        />
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
                          backgroundImage: `url(${
                            process.env.NEXT_PUBLIC_API_URL + fd?.image
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          blockSize: 400,
                          borderRadius: "24px 24px 0px 0px",
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
                        onClick={(e) => {
                          handleAddToBasket(fd);
                        }}
                      >
                        <AddShoppingCartIcon />
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
