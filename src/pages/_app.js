import SearchProvider from "@/context/cartContext";
import "@/styles/globals.css";
import "rc-slider/assets/index.css";
import { Toaster } from "react-hot-toast";

import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
}
