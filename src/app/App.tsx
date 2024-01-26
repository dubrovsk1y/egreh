import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { CacheProvider, EmotionCache } from "@emotion/react";

import { createEmotionCache } from "./createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface IAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export function App(props: IAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </CacheProvider>
  );
}
