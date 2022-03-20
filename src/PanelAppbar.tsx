import * as React from "react";

import { CSSObject, Theme, styled } from "@mui/material/styles";
import { Grid, Popover, Select } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { alpha, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { AnyRecord } from "dns";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import Footer from "./partials/Footer";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InputBase from "@mui/material/InputBase";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "../src/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MuiDrawer from "@mui/material/Drawer";
import type { NextPage } from "next";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import { signOut } from "next-auth/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useSession } from "next-auth/react";

const localesImages = { en: "/images/usa.png", fr: "/images/france.png" };

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
const drawerWidth = 170;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props: any) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "account-popover" : undefined;
  const mediumScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return mediumScreenMatch ? (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {new RegExp("users/(.*)$").exec(router.pathname)[1].toUpperCase()}
          </Typography>
          <Button
            aria-describedby={popoverId}
            onClick={handlePopoverClick}
            sx={{ marginInlineStart: "auto" }}
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
            <Link
              href={"/users/dashboard"}
              underline="none"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <Typography sx={{ p: 1, my: "0px !important" }} component={"p"}>
                <span style={{ marginRight: "5px" }}>
                  <DashboardOutlinedIcon />{" "}
                </span>
                dashboard
              </Typography>
            </Link>
            <Link
              href={"/users/settings"}
              underline="none"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <Typography sx={{ p: 1, my: "0px !important" }} component={"p"}>
                <span style={{ marginRight: "5px" }}>
                  <SettingsOutlinedIcon />{" "}
                </span>
                settings
              </Typography>
            </Link>
            <Button
              sx={{ textTransform: "capitalize", color: "black", p: 0 }}
              onClick={() =>
                signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL + "/" })
              }
            >
              <Typography sx={{ p: 1, my: "0px !important" }} component={"p"}>
                <span style={{ marginRight: "5px" }}>
                  <PowerSettingsNewIcon />{" "}
                </span>
                logout
              </Typography>
            </Button>
          </Popover>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        color={"primary"}
        PaperProps={{
          sx: {
            boxShadow: 12,
            backgroundColor: "primary.main",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              title: "Dashboard",
              icon: <DashboardRoundedIcon />,
              href: "/users/dashboard",
            },
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
              icon: <AccountBalanceWalletOutlinedIcon />,
              href: "/users/wallet",
            },
            {
              title: "Settings",
              icon: <SettingsOutlinedIcon />,
              href: "/users/settings",
            },
            {
              title: "Support",
              icon: <SupportRoundedIcon />,
              href: "/users/support",
            },
          ].map((page) => (
            <ListItem
              component={Link}
              componentsProps={{ root: { href: page.href ? page.href : "/" } }}
              button
              key={page.title}
            >
              <ListItemIcon sx={{ fontSize: "1.5rem" }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
        <List sx={{ marginBlockStart: "auto" }}>
          <Divider />

          {[
            { title: "Home", icon: <HomeOutlinedIcon />, href: "/" },
            { title: "Telegram", icon: <TelegramIcon />, href: "/" },
            { title: "Instagram", icon: <InstagramIcon />, href: "/" },
            { title: "Email", icon: <AlternateEmailIcon />, href: "/" },
          ].map((page) => (
            <ListItem
              component={Link}
              componentsProps={{ root: { href: page.href } }}
              button
              key={page.title}
            >
              <ListItemIcon sx={{ fontSize: "1.5rem" }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
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
      <Select
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
        </Select>
      <main>{props.children}</main>

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
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + props.logo}
          width={110}
          height={50}
        />
      </a>
    </>
  );
}
