import { Container, Grid } from "@mui/material";

import Box from "@mui/material/Box";
import FlexColumnNoWrap from "../FlexColumnNoWrap";
import FlexRowStacked from "../FlexRowStacked";
import Image from "next/image";
import Link from "../Link";
import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

function Footer(props: any) {
  const router = useRouter();
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#363636",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        {/* About us */}
        <Grid container sx={{ p: 5 }}>
          <Grid item xs={12} md={8}>
            {props.about_us}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography component={"h6"} sx={{ pb: 0 }}>
              Quick Links
            </Typography>
            <Box
              sx={{ borderBottom: 4, inlineSize: 90, p: 1, m: 0, mb: 1 }}
            ></Box>
            <Typography
              component={"h6"}
              onClick={() => router.push("/articles")}
              sx={{ cursor: "pointer" }}
            >
              Articles
            </Typography>
            <Typography
              component={"h6"}
              onClick={() => router.push("/contactUs")}
              sx={{ cursor: "pointer" }}
            >
              Contact us
            </Typography>
            <Typography
              component={"h6"}
              onClick={() => router.push("/donate")}
              sx={{ cursor: "pointer" }}
            >
              Donate
            </Typography>
            <Typography
              component={"h6"}
              onClick={() => router.push("/aboutUs")}
              sx={{ cursor: "pointer" }}
            >
              About us
            </Typography>
          </Grid>
        </Grid>
        {/* Social Networks */}
        <Grid container sx={{ borderTop: 1, borderColor: "white", p: 2 }}>
          <Grid item xs={12} md={12} sx={{ textAlign: "center", fontSize: 15 }}>
            © {new Date().getUTCFullYear()} {`${props.name}`}
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
              <Grid
                item
                component={"a"}
                href={
                  props.instagram_page
                    ? `https://www.instagram.com/${props.instagram_page.replace(
                        "@",
                        ""
                      )}`
                    : "#"
                }
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/images/instagram-svgrepo-com.svg"
                  width={43}
                  height={43}
                />
              </Grid>
              <Grid
                item
                component={"a"}
                href={
                  props.telegram_id
                    ? `https://www.telegram.me/${props.telegram_id.replace(
                        "@",
                        ""
                      )}`
                    : "#"
                }
                aria-label="Follow us on Telegram"
              >
                <Image src="/images/logo-telegram.svg" width={43} height={43} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
