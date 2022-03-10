import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import FlexColumnNoWrap from "./FlexColumnNoWrap";
import FlexRowStacked from "./FlexRowStacked";
import Image from "next/image";
import Link from "../src/Link";
import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterFlex = styled(Container)({
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "auto",
  padding: "30px",
});

const FooterBar = styled(Box)({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "30px",
  paddingBlock: "10px",
});

const SocialNetworks = styled(Box)({
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center",
});
function Footer() {
  return (
    <Box component={"footer"} sx={{ backgroundColor: "primary.main" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>About</Box>
        <Box>Links</Box>
      </Container>
      <Container maxWidth="xl">
        <Grid container className="_1m4cc7g">
          <Grid item xs={12} md={8}>
            © {new Date().getUTCFullYear()} Kakoota
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ml: "auto", display: "block", inlineSize: 200}}>
            <a
              href="khanacademy_1.html"
              aria-label="Follow us on Facebook"
              className="_19ujcxk"
            >
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                width={24}
                height={24}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="M14.172 0H.827A.827.827 0 0 0 0 .828v13.344c0 .458.37.828.828.828h7.184V9.19H6.057V6.925h1.955v-1.67c0-1.938 1.183-2.992 2.913-2.992.827 0 1.54.062 1.747.09v2.025h-1.197c-.94 0-1.123.447-1.123 1.102v1.445h2.243L12.3 9.19h-1.95V15h3.822c.458 0 .828-.37.828-.828V.827A.827.827 0 0 0 14.172 0z"
                />
              </svg>
            </a>
            <a
              href="khanacademy.html"
              aria-label="Follow us on Twitter"
              className="_19ujcxk"
            >
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                width={24}
                height={24}
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M18.895 0H1.105C.495 0 0 .495 0 1.105V18.9c0 .605.495 1.1 1.105 1.1H18.9c.61 0 1.105-.495 1.105-1.105V1.105A1.113 1.113 0 0 0 18.895 0zM14.97 7.455c.005.11.005.22.005.33 0 3.385-2.58 7.295-7.295 7.295a7.293 7.293 0 0 1-3.925-1.145A5.142 5.142 0 0 0 7.55 12.87a2.564 2.564 0 0 1-2.395-1.78c.155.03.315.045.48.045.235 0 .46-.03.675-.09A2.57 2.57 0 0 1 4.255 8.53v-.035c.345.19.74.305 1.16.32A2.57 2.57 0 0 1 4.62 5.39a7.28 7.28 0 0 0 5.285 2.68 2.567 2.567 0 0 1 2.5-3.15c.735 0 1.4.31 1.87.81a5.1 5.1 0 0 0 1.63-.62 2.58 2.58 0 0 1-1.13 1.42c.52-.065 1.015-.2 1.475-.405-.345.515-.78.97-1.28 1.33z"
                />
              </svg>
            </a>
            <a
              href="login.html"
              aria-label="Follow us on Instagram"
              className="_19ujcxk"
            >
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.24,7.28a2.67,2.67,0,0,0-1.52-1.52,4.33,4.33,0,0,0-1.49-.27c-.84,0-1.09,0-3.23,0s-2.39,0-3.23,0a4.33,4.33,0,0,0-1.49.27A2.67,2.67,0,0,0,5.76,7.28a4.33,4.33,0,0,0-.27,1.49c0,.84,0,1.09,0,3.23s0,2.39,0,3.23a4.33,4.33,0,0,0,.27,1.49,2.67,2.67,0,0,0,1.52,1.52,4.33,4.33,0,0,0,1.49.27c.84,0,1.09,0,3.23,0s2.39,0,3.23,0a4.33,4.33,0,0,0,1.49-.27,2.67,2.67,0,0,0,1.52-1.52,4.33,4.33,0,0,0,.27-1.49c0-.84,0-1.09,0-3.23s0-2.39,0-3.23A4.33,4.33,0,0,0,18.24,7.28ZM12,16.11A4.11,4.11,0,1,1,16.11,12,4.11,4.11,0,0,1,12,16.11Zm4.27-7.42a1,1,0,1,1,1-1A1,1,0,0,1,16.27,8.69Z M12,9.33A2.67,2.67,0,1,0,14.67,12,2.68,2.68,0,0,0,12,9.33Z M22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM20,15.3a5.85,5.85,0,0,1-.37,1.94,4,4,0,0,1-2.34,2.34A5.85,5.85,0,0,1,15.3,20c-.85,0-1.13.05-3.3.05S9.55,20,8.7,20a5.85,5.85,0,0,1-1.94-.37,4,4,0,0,1-2.34-2.34,5.85,5.85,0,0,1-.37-1.94c0-.85,0-1.13,0-3.3s0-2.45,0-3.3a5.85,5.85,0,0,1,.37-1.94A4,4,0,0,1,6.76,4.42,5.85,5.85,0,0,1,8.7,4.05C9.55,4,9.83,4,12,4s2.45,0,3.3,0a5.85,5.85,0,0,1,1.94.37,4,4,0,0,1,2.34,2.34A5.85,5.85,0,0,1,20,8.7c0,.85.05,1.13.05,3.3S20,14.45,20,15.3Z"
                />
              </svg>
            </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
