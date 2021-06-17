import { useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../global.css";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={`${isDarkMode ? "dark" : ""} h-full`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <div className="h-full dark:bg-gray-800">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;