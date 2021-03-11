import * as React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts";
import { LocaleProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default MyApp;
