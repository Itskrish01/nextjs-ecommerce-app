import SearchProvider from "@/context/searchContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
}
