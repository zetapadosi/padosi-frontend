const styles = {
  wrapper: "p-3 flex-grow bg-white dark:bg-gray-800",
  text: "text-gray-900 dark:text-white",
  subtext: "text-gray-600 dark:text-gray-300",
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Dark mode is here!</h1>
      <p className={styles.subtext}>Lorem ipsum...</p>
    </div>
  );
}
