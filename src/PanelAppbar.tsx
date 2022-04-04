import * as React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Button, useMediaQuery } from "@mui/material";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Box from "@mui/material/Box";
import Breakpoint from "./context/breakpointContext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Divider from "@mui/material/Divider";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "../src/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { Popover } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const drawerWidth = 170;
const pages = [
  {
    title: "Home",
    href: "/",
    icon: <HomeRoundedIcon fontSize="large" />,
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

function setCookie(cname, cvalue, exdays) {
  document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default function MiniDrawer(props: any) {
  // states
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  // other hooks
  const breakpoint = React.useContext(Breakpoint);
  const theme = useTheme();
  const router = useRouter();
  const mediumScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up(breakpoint)
  );
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "account-popover" : undefined;

  React.useEffect(() => {
    if (getCookie("drawerStatus")) {
      setOpen(JSON.parse(getCookie("drawerStatus")));
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCookie("drawerStatus", "true", "");
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setCookie("drawerStatus", "false", "");
  };

  return mediumScreenMatch ? (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} color="default">
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
        PaperProps={{
          sx: {
            boxShadow: 12,
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
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
              title: "Lists",
              icon: <ArticleOutlinedIcon />,
              href: "/users/lists",
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
              <ListItemIcon sx={{ fontSize: "1.5rem", color: "whitesmoke" }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} sx={{ color: "whitesmoke" }} />
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
              <ListItemIcon sx={{ fontSize: "1.5rem", color: "whitesmoke" }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} sx={{ color: "whitesmoke" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  ) : (
    <>
      <AppBar
        position="fixed"
        color={"default"}
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
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </main>
      <Toolbar />
    </>
  );
}
