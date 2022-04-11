import "../public/css/flickity.min.css";

import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";

import { AppProps } from "next/app";
import Breakpoint from "../src/context/breakpointContext";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import ResponsiveNavBar from "../src/partials/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import { unstable_ClassNameGenerator } from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// // call this function at the root of the application
// unstable_ClassNameGenerator.configure((componentName) =>
//   componentName.replace("Mui", "@mehdiabdi1995-")
// );

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Breakpoint.Provider value="md">
          <Component {...pageProps} />
        </Breakpoint.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
