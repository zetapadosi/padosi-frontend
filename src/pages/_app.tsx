import { useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../global.css";

import Toggle from "../components/Toggle";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [location, setLocation] = useState(null);
  return (
    <main className={`${isDarkMode ? "dark" : ""} h-full`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <div className="h-full bg-primary-bg dark:bg-gray-800">
        <Component location={location} setLocation={setLocation} {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
