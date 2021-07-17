import { useState } from "react";
import { Provider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../global.css";

import Toggle from "../components/Toggle";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ReduxProvider store={store}>
      <main className={`${isDarkMode ? "dark" : ""} h-full`}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <title>Padosi - Your Friendly Neighborhood App</title>
        </Head>
        <div className="min-h-full bg-primary-bg dark:bg-gray-800">
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </main>
    </ReduxProvider>
  );
}

export default MyApp;
