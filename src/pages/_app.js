import SearchProvider from "@/context/cartContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import NProgress from "nprogress"; // You can use a progress bar library like nprogress

import "nprogress/nprogress.css"; // Import the CSS for styling
import { Router } from "next/router";

// Set up NProgress for Next.js router events
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
