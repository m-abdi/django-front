import * as React from "react";

import { styled, useTheme } from "@mui/material/styles";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AppBar from "@mui/material/AppBar";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import Footer from "../src/Footer";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "../src/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import type { NextPage } from "next";
import { Popover } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import UserPanel from "./PanelAppbar";
import { signOut } from "next-auth/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));
const pages = [
  {
    title: "Home",
    href: "/",
    icon: <HomeRoundedIcon fontSize="large" />,
  },
  // {
  //   title: "Articles",
  //   href: "/articles",
  //   icon: <ArticleRoundedIcon fontSize="large" />,
  // },
  {
    title: "MyExchanges",
    icon: <CurrencyExchangeRoundedIcon />,
    href: "/users/myExchanges",
  },
  {
    title: "Bots",
    icon: <Icon icon="mdi:robot" />,
    href: "/users/bots",
  },
  {
    title: "Support",
    href: "/support",
    icon: <HelpRoundedIcon fontSize="large" />,
  },
  {
    title: "Account",
    href: "/users/dashboard",
    icon: <AccountCircleRoundedIcon fontSize="large" />,
  },
];

const ResponsiveAppBar: NextPage = (props) => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "account-popover" : undefined;

  const router = useRouter();
  const routerMatch = [
    "/users/dashboard",
    "/users/myExchanges",
    "/users/bots",
    "/users/wallet",

    "/users/settings",
  ].includes(router.pathname);
  const signInUpRoutes = ["/users/register", "/users/login"].includes(
    router.pathname
  );
  const mediumScreenMatch = useMediaQuery((theme:any) =>
    theme.breakpoints.up("md")
  );
  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {(routerMatch || signInUpRoutes) && mediumScreenMatch ? (
        false
      ) : (
        <AppBar
          position="fixed"
          color="default"
          sx={{
            top: { xs: "auto", md: 0 },
            bottom: { xs: 0, md: "auto" },
            left: 0,
            right: 0,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: { xs: "flex" },
                flexDirection: "row",
                alignItems: "center",
                justifyContent: mediumScreenMatch
                  ? "flex-start"
                  : "space-between",
              }}
            >
              {/* logo for screens larger than medium */}
              {routerMatch ? undefined : (
                <Box sx={{ padding: 0, display: { xs: "none", md: "block" } }}>
                  <Link href="/" underline="none">
                    <Image src={"/logo.svg"} width={140} height={30} />
                  </Link>
                </Box>
              )}
              {/* navbar list or app list */}
              {mediumScreenMatch ? (
                routerMatch ? undefined : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                        inlineSize: "60%",
                      }}
                    >
                      {pages.map((page) =>
                        !(page.title === "Account") ? (
                          <Link
                            key={page.title}
                            href={page.href}
                            sx={{ my: 1, color: "black", display: "block" }}
                            underline="none"
                          >
                            {page.title}
                          </Link>
                        ) : (
                          false
                        )
                      )}
                    </Box>
                    <Box
                      sx={{
                        inlineSize: { md: "20%" },
                        margin: "auto",
                        display: "flex",
                        flexFlow: "row",
                        justifyContent: "center",
                      }}
                    ></Box>

                    <Button
                      aria-describedby={popoverId}
                      onClick={handlePopoverClick}
                    >
                      <AccountCircleRoundedIcon fontSize="large" />
                    </Button>
                    <Popover
                      id={popoverId}
                      open={popoverOpen}
                      anchorEl={anchorEl}
                      onClose={handlePopoverClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      {session ? (
                        <>
                          <Link
                            href={"/users/dashboard"}
                            underline="none"
                            sx={{ color: "black", textTransform: "capitalize" }}
                          >
                            <Typography sx={{ p: 1 }} component={"p"}>
                              dashboard
                            </Typography>
                          </Link>
                          <Link
                            href={"/users/settings"}
                            underline="none"
                            sx={{ color: "black", textTransform: "capitalize" }}
                          >
                            <Typography sx={{ p: 1 }} component={"p"}>
                              settings
                            </Typography>
                          </Link>
                          <Button
                            sx={{
                              textTransform: "capitalize",
                              color: "black",
                              p: 0,
                            }}
                            onClick={() =>
                              signOut({
                                callbackUrl: process.env.NEXT_PUBLIC_URL + "/",
                              })
                            }
                          >
                            <Typography sx={{ p: 1 }} component={"p"}>
                              logout
                            </Typography>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Link
                            href={"/users/login"}
                            underline="none"
                            sx={{ color: "black", textTransform: "capitalize" }}
                          >
                            <Typography sx={{ p: 2 }} component={"p"}>
                              login
                            </Typography>
                          </Link>
                          <Link
                            href={"/users/register"}
                            underline="none"
                            sx={{ color: "black", textTransform: "capitalize" }}
                          >
                            <Typography sx={{ p: 2 }} component={"p"}>
                              register
                            </Typography>
                          </Link>
                        </>
                      )}
                    </Popover>
                  </>
                )
              ) : (
                pages.map((page) => (
                  <Link
                    href={page.href}
                    underline="none"
                    color="black"
                    key={page.title}
                    sx={{ fontSize: "1.5rem" }}
                  >
                    {page.icon}
                  </Link>
                ))
              )}
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {routerMatch && mediumScreenMatch ? (
        <UserPanel>{props.children}</UserPanel>
      ) : (
        <>
          <Toolbar sx={{ display: { xs: "none", md: "block" } }} />
          <main>{props.children}</main>
          {!routerMatch && !signInUpRoutes && <Footer />}

          <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
        </>
      )}
    </>
  );
};
export default ResponsiveAppBar;
