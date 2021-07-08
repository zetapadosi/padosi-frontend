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
    <main className={`${isDarkMode ? "dark" : ""} h-full`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <div className="min-h-full bg-primary-bg dark:bg-gray-800">
        <Provider session={pageProps.session}>
          <ReduxProvider store={store}>
            <Component {...pageProps} />
          </ReduxProvider>
        </Provider>
      </div>
    </main>
  );
}

export default MyApp;
