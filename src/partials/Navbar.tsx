import * as React from "react";

import { Divider, Grid, Popover, Select } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { AnyRecord } from "dns";
import AppBar from "@mui/material/AppBar";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Fab from "@mui/material/Fab";
import Footer from "./Footer";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "../Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import type { NextPage } from "next";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SignIn from "../SignInDialog";
import SignUp from "../SignUpDialog";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import UserPanel from "../PanelAppbar";
import Zoom from "@mui/material/Zoom";
import { signOut } from "next-auth/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useSession } from "next-auth/react";

const localesImages = { en: "/images/usa.png", fr: "/images/france.png" };
const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.primary.main}`,

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "300px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
function ScrollTop(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}
function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
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
    {
    title: "Search",
    icon: <SearchRoundedIcon fontSize="large" />,
    href: "/search",
  },
  {
    title: "Articles",
    href: "/articles",
    icon: <ArticleRoundedIcon fontSize="large" />,
  },
  {
    title: "Support",
    href: "/contactUs",
    icon: <HelpRoundedIcon fontSize="large" />,
  },
  {
    title: "Account",
    href: "/users/dashboard",
    icon: <AccountCircleRoundedIcon fontSize="large" />,
  },
];

const ResponsiveNavBar = (props: any) => {
  const { data: session } = useSession();
  const [locale, setLocale] = useState("");
  const [loginDialog, setLoginDialog] = useState(false);
  const [registerDialog, setRegisterDialog] = useState(false);

  const mediumScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "account-popover" : undefined;
  useEffect(() => {
    if (mediumScreenMatch) {
      /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, [mediumScreenMatch]);
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

  const loginDialogHandle = () => {
    setLoginDialog(false);
  };
  const registerDialogHandle = () => {
    setRegisterDialog(false);
  };
  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return mediumScreenMatch ? (
    <>
      <AppBar
        position="fixed"
        id="navbar"
        color={props.color ? props.color : "default"}
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
        <Container maxWidth="xl">
          <Toolbar
            component={"nav"}
            sx={{ justifyContent: "space-between" }}
            aria-label="page header"
            role="navigation"
          >
            <Grid item md={5}>
              <Search>
                <SearchIconWrapper sx={{ px: 0, ml: 0 }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ px: 3, inlineSize: "100%" }}
                />
              </Search>
            </Grid>
            <Grid
              item
              md={2}
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a title="home" href={`/${props.language}`}>
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + props.logo}
                  width={110}
                  height={50}
                />
              </a>
            </Grid>
            <Grid
              item
              md={5}
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Link
                href={"/donate"}
                underline="none"
                color={"inherit"}
                sx={{ mr: 1 }}
              >
                <Typography fontWeight={"bold"} color="inherit">
                  Donate
                </Typography>
              </Link>
              <Box
                sx={{
                  ":after": { content: '"|"' },
                  fontWeight: "bold",
                  mr: 1,
                }}
              ></Box>
              <Link
                href={"/contactUs"}
                underline="none"
                color={"inherit"}
                sx={{ mr: 1 }}
              >
                <Typography fontWeight={"bold"} color="inherit">
                  Contact us
                </Typography>
              </Link>
              <Box
                sx={{
                  ":after": { content: '"|"' },
                  fontWeight: "bold",
                  mr: 1,
                }}
              ></Box>
              <a
                onClick={() => setLoginDialog(true)}
                style={{
                  marginRight: 6,
                  textTransform: "none",
                  cursor: "pointer",
                }}
              >
                <Typography fontWeight={"bold"} color="inherit">
                  Login
                </Typography>
              </a>
              <SignIn
                open={loginDialog}
                selectedValue={"selectedValue"}
                handleClose={loginDialogHandle}
                setRegisterDialog={setRegisterDialog}
              />
              <Box
                sx={{
                  ":after": { content: '"|"' },
                  fontWeight: "bold",
                  mr: 1,
                }}
              ></Box>

              <a
                onClick={() => setRegisterDialog(true)}
                style={{
                  marginRight: 6,
                  textTransform: "none",
                  cursor: "pointer",
                }}
              >
                <Typography fontWeight={"bold"} color="inherit">
                  Sign up
                </Typography>
              </a>
              <SignUp
                open={registerDialog}
                selectedValue={"selectedValue"}
                handleClose={registerDialogHandle}
                setLoginDialog={setLoginDialog}
              />
              <Select
                sx={{ blockSize: 40, p: 0 }}
                displayEmpty
                value={router.locale}
                renderValue={() => {
                  return (
                    <img
                      title={router.locale}
                      loading="lazy"
                      src={localesImages[router.locale]}
                      width="30px"
                      style={{ marginTop: "4px" }}
                    />
                  );
                }}
              >
                <MenuItem
                  value={"en"}
                  onClick={() => router.push(router.pathname, router.pathname, { locale: "en", shallow: false })}
                >
                  <img
                    title={router.locale}
                    loading="lazy"
                    src={localesImages["en"]}
                    width="30px"
                    alt={`Flag of USA`}
                    style={{ marginRight: "15px" }}
                  />
                  <b>English</b>
                </MenuItem>
                <MenuItem
                  value={"fr"}
                  onClick={() => router.push(router.pathname, router.pathname, { locale: "fr", shallow: false })}
                >
                  <img
                    title={router.locale}
                    loading="lazy"
                    src={localesImages["fr"]}
                    width="30px"
                    alt={`Flag of France`}
                    style={{ marginRight: "15px" }}
                  />
                  <b>French</b>
                </MenuItem>
              </Select>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <main>{props.children}</main>
      <Footer
        name={props.name}
        about_us={props.about_us}
        telegram_id={props.telegram_id}
        instagram_page={props.instagram_page}
      />
    </>
  ) : (
    <>
      <AppBar
        position="fixed"
        color={props.color ? props.color : "default"}
        sx={{
          boxShadow: 10,
          top: "auto",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Toolbar
          component={"nav"}
          sx={{ justifyContent: "space-between" }}
          role="navigation"
        >
          {pages.map((page) => (
            <Link
              href={page.href}
              underline="none"
              color="black !important"
              key={page.title}
              sx={{ fontSize: "1.5rem" }}
            >
              {page.icon}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      
      <main><Select
        sx={{
          blockSize: 40,
          p: 0,
          position: "absolute",
          right: 3,
          zIndex: 200,
          top: 2,
        }}
        id="localeSelect"
        displayEmpty
        value={router.locale}
        renderValue={() => {
          return (
            <img
              title={router.locale}
              loading="lazy"
              src={localesImages[router.locale]}
              width="30px"
              style={{ marginTop: "4px" }}
            />
          );
        }}
      >
        <MenuItem
          value={"en"}
          onClick={() =>
            router.push(router.pathname, router.pathname, {
              locale: "en",
              shallow: false,
            })
          }
        >
          <img
            title={router.locale}
            loading="lazy"
            src={localesImages["en"]}
            width="30px"
            alt={`Flag of USA`}
            style={{ marginRight: "15px" }}
          />
          <b>English</b>
        </MenuItem>
        <MenuItem
          value={"fr"}
          onClick={() =>
            router.push(router.pathname, router.pathname, {
              locale: "fr",
              shallow: false,
            })
          }
        >
          <img
            title={router.locale}
            loading="lazy"
            src={localesImages["fr"]}
            width="30px"
            alt={`Flag of France`}
            style={{ marginRight: "15px" }}
          />
          <b>French</b>
        </MenuItem>
      </Select>{props.children}</main>
      <Footer
        name={props.name}
        about_us={props.about_us}
        telegram_id={props.telegram_id}
        instagram_page={props.instagram_page}
      />
      <Toolbar />

      <a
        href="/"
        title="home"
        style={{
          padding: 0,
          position: "fixed",
          top: 0,
          left: "calc((100vw - 150px) / 2)",
          zIndex: 100,
          inlineSize: 150,
          backgroundColor: "white",
          boxShadow:
            "2px 2px 4px rgba(0, 0, 0, 0.5), 4px 4px 8px rgba(0, 0, 0, 0.3)",
          border: "1px solid white",
          borderRadius: "0px 0px 40% 40%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={process.env.NEXT_PUBLIC_API_URL + props.logo} width={110} height={50} />
      </a>
    </>
  );
};
export default ResponsiveNavBar;
