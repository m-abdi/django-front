import * as React from "react";

import { Divider, Popover } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AppBar from "@mui/material/AppBar";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
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
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
    title: "Wallet",
    href: "/users/wallet",
    icon: <AccountBalanceWalletRoundedIcon fontSize="large" />,
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

  const homeMatch = ["/"].includes(router.pathname);
  const signInUpRoutes = ["/users/register", "/users/login"].includes(
    router.pathname
  );
  const mediumScreenMatch = useMediaQuery((theme: any) =>
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
          color={mediumScreenMatch ? "transparent" : "default"}
          sx={{
            top: { xs: "auto", md: 0 },
            bottom: { xs: 0, md: "auto" },
            left: 0,
            right: 0,
            borderRadius: { md: "5px 5px 75px 75px" },
            mx: { md: "auto" },
            minInlineSize: { md: "800px" },
          }}
        >
          <nav aria-label="page header" className="_9bl3wi" role="navigation">
            <div className="_1ycdc3w">
              <div className="_1qhmdkk0">
                <div className="_1c8t70d">
                  <button
                    data-test-id="learn-menu-dropdown"
                    aria-expanded="false"
                    className="_tr38f8i"
                  ></button>
                  <div id="header-dropdown" className="_1vfqidr7" />
                </div>
                <div className="_1boekgo">
                  <a
                    data-hack-search-button-label="true"
                    aria-label="Search for courses, skills, and videos"
                    href="/search"
                    className="_14nbw552"
                    style={{ backgroundColor: "#F0F1F2" }}
                    data-test-id="navbar-search-button"
                  >
                    <div className="_dhzffk">
                      <span className="_gkt786u">Search</span>
                      <div className="_v6ttsbo">
                        <svg
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          width={20}
                          height={20}
                          viewBox="0 0 10 10"
                        >
                          <path
                            fill="currentColor"
                            d="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,
    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,
    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,
    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,
    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,
    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,
    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,
    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283
    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,
    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1
    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,
    7.5 L4.25,7.5 Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <Link href={"/"}>
              <Image src={"/images/logo.svg"} width={110} height={50}/>
              
              </Link>
              <div className="_eil8noz">
                <Link href={"/donate"} underline="none" color={"inherit"} sx={{mr: 2}}>
                  <Typography fontWeight={"bold"}>Donate</Typography>
                </Link>
                <Link href={"/donate"} underline="none" color={"inherit"} sx={{mr: 2}}>
                  <Typography fontWeight={"bold"}>Login</Typography>
                </Link>

                <Link href={"/donate"} underline="none" color={"inherit"} sx={{mr: 2}}>
                  <Typography fontWeight={"bold"}>Sign up</Typography>
                </Link>

                <div className="_xvt9wo">
                  <a
                    aria-label=""
                    data-test-id="mobile-search-button"
                    tabIndex={0}
                    className="_5tdxkjz"
                    href="/search"
                  >
                    <div className="_goqwwol">
                      <span className="_19bpjuy">
                        Search for courses, skills, and videos
                      </span>
                      <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        width={20}
                        height={20}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="currentColor"
                          d="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,
    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,
    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,
    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,
    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,
    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,
    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,
    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283
    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,
    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1
    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,
    7.5 L4.25,7.5 Z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="_xvt9wo">
                  <button
                    className="_d4d2b5k"
                    data-test-id="mobile-header-menu-button"
                    aria-expanded="false"
                    aria-label="Open menu"
                    aria-controls="page-header-responsive-nav-menu"
                  >
                    <svg
                      role="img"
                      aria-hidden="true"
                      focusable="false"
                      width="16.79422278736115"
                      height={14}
                      viewBox="0 0 100 83.362"
                    >
                      <path
                        fill="currentColor"
                        d="M100.035 70.91l0 8.322q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.322q0-1.71 1.254-2.964t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.964zm0-33.402l0 8.379q.057 1.71-1.197 2.964t-2.964 1.197l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.653 1.254-2.907t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.907zm0-33.345l0 8.379q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.71 1.254-2.964t2.907-1.197l91.713 0q1.71-.057 2.964 1.197t1.197 2.964z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="_2thbqw"
            data-test-id="responsive-nav-menu"
            id="page-header-responsive-nav-menu"
            role="menu"
          >
            <div className="_xu2jcg _1pwnewep" />
          </div>
        </AppBar>
      )}

      {routerMatch && mediumScreenMatch ? (
        <UserPanel>{props.children}</UserPanel>
      ) : (
        <>
          {homeMatch ? (
            false
          ) : (
            <Toolbar sx={{ display: { xs: "none", md: "block" } }} />
          )}
          <Box component={"main"} sx={{ p: routerMatch ? 2 : 0 }}>
            {props.children}
          </Box>
          {!routerMatch && !signInUpRoutes && <Footer />}

          <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
        </>
      )}
    </>
  );
};
export default ResponsiveAppBar;
