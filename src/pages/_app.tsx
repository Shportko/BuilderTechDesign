import configureStore from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import AppWrapper from "../AppWrapper/AppWrapper";

const store = configureStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Builder Tech Design – Don't wait to renovate!"
        />
        <title>Builder Tech Design</title>
      </Head>
      <Provider store={store}>
        <AppWrapper Component={Component} pageProps={pageProps} />
      </Provider>
    </>
  );
}
