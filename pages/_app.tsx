import "../src/style.css";
import "../src/BarLoader.css"

import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";

import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import CurrentUser from "../src/CurrentUserContext";
import Head from "next/head";
import ResponsiveAppBar from "../src/Appbar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CurrentUser.Provider
          value={{ username: "mehdi", email: "m.abdi.public@gmail.com" }}
        >
          <SessionProvider session={pageProps.sessoin}>
            <ResponsiveAppBar>
              <Component {...pageProps} />
            </ResponsiveAppBar>
          </SessionProvider>
        </CurrentUser.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
