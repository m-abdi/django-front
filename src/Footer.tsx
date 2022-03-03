import Box from "@mui/material/Box"
import { Container } from "@mui/material";
import FlexColumnNoWrap from "./FlexColumnNoWrap";
import FlexRowStacked from "./FlexRowStacked";
import Image from "next/image";
import Link from "../src/Link";
import React from "react";
import { Typography } from "@mui/material";
import {styled} from "@mui/system"

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
    paddingBlock: "10px"
})

const SocialNetworks = styled(Box)({
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
})
function Footer() {
  return (
    <footer>
      <FooterFlex maxWidth="xl">
        <FlexColumnNoWrap>
          <Image src={"/logo.png"} width="200" height={100}/>
          <Typography component={"p"}>
            botland Crypto Trading Platform: Smart tools for cryptocurrency
            investors to minimize risks, limit losses, grow profits, and manage
            their portfolios across multiple exchanges.
          </Typography>
        </FlexColumnNoWrap>
        <FlexColumnNoWrap>
        <Typography component={"h4"}>Quick Links</Typography>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Articles</Link>
        <Link href={"#"}>FAQ</Link>
        <Link href={"#"}>Contact us</Link>

        </FlexColumnNoWrap>
        <FlexColumnNoWrap>
        <Typography component={"h4"}>Contact Us</Typography>

          <Typography component={"p"}>
            botland Crypto Trading Platform: Smart tools for cryptocurrency
            investors to minimize risks, limit losses, grow profits, and manage
            their portfolios across multiple exchanges.
          </Typography>
        </FlexColumnNoWrap>
      </FooterFlex>
      <FooterBar><Typography>botland auto trading system © 2022 All Right Reserved</Typography><SocialNetworks><Box>1</Box><Box>2</Box></SocialNetworks></FooterBar>
    </footer>
  );
}

export default Footer;
