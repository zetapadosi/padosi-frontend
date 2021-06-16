import { useState } from "react";
import "tailwindcss/tailwind.css";
import "../global.css";

const styles = {
  wrapper: (darkMode: boolean) => `flex flex-col h-full ${darkMode ? "dark" : ""}`,
  button: "p-4 bg-gray-300 dark:bg-gray-700 dark:text-pink-400 focus:outline-none",
};

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={styles.wrapper(darkMode)}>
      <button className={styles.button} onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
