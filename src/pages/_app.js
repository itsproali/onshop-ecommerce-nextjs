import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnShop | Best Online E-commerce Solution</title>
        <meta
          name="description"
          content="OnShop | Best Online E-commerce Solution | Developed by Mohammad Ali using Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />;
        </PersistGate>
      </Provider>
      </SessionProvider>
    </>
  );
}
