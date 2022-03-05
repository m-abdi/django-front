import * as React from "react";

import Articles from "../src/Articles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import FlexRowStacked from "../src/FlexRowStacked";
import Image from "next/image";
import Link from "../src/Link";
import MediaCard from "../src/ArticleCard";
import type { NextPage } from "next";
import ResponsiveAppBar from "../src/Appbar";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <Box>
      {/* hero view */}
      <Box
        sx={{
          blockSize: "100vh",
        }}
      >
        <Box
          sx={{
            padding: 0,
            display: { xs: "block", md: "none" },
            margin: "auto",
            inlineSize: "150px",
          }}
        >
          <img src={"/logo.svg"} width="100%" title="logo" />
        </Box>
        <FlexRowStacked
          maxWidth="xl"
          sx={{
            flexDirection: { xs: "row", md: "row-reverse" },
            blockSize: "100%",
          }}
        >
          <Box
            sx={{
              inlineSize: { xs: "100vw", md: "40%" },
              backgroundImage: "url('/images/tradingBot - one.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              src="/images/candlesticks.gif"
              title="introduction"
              width={"100%"}
              height="100%"
            />
          </Box>
          {/* hero text and image */}
          <Box
            sx={{
              inlineSize: { xs: "100vw", md: "40%" },
            }}
          >
            <Typography component="h1" fontSize={"24pt"}>
              Use crypto auto trader bot system
            </Typography>
            <Typography component={"p"}>
              Welcome to the botland bot site. This bot is smart and automatic
              and web based muti coin auto trader bot for crypto s such bitcoin
              , etherium ,binance coin . Please see the complete bot guide from
              this link or from pages section . if you have any question dont
              hesitate to contact us
            </Typography>
            <Link
              href="/users/register"
              noLinkStyle
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#1dc436", marginBlock: "20px" }}
              >
                Start Trading
              </Button>
            </Link>
          </Box>
        </FlexRowStacked>
      </Box>
      <FlexRowStacked>
        <Image src="/images/bot.png" width={400} height={400} />
        <Box
          sx={{
            minInlineSize: "300px",
            maxInlineSize: "500px",
            padding: "20px",
            margin: "10px",
          }}
        >
          <Typography component={"h2"}>About Botland</Typography>
          <Typography component={"p"}>
            We have designed an intelligent and fully automated bot that is the
            easiest way for the user to trade. Just give it crypto exchange API
            and all works will be done by bot. please visit pages section and
            read currefully about bot. if you had any problem please send ticket
            or send email to us.<br></br>
            <br></br>✅ full smart and easy to use and profitable cryptocurrency
            auto trader bot<br></br> ✅ Completely secure system <br></br>✅
            Responsibility and timely response to customer
          </Typography>
        </Box>
      </FlexRowStacked>
      {/* Articles */}
      <Articles />
    </Box>
  );
};
export default Home;
