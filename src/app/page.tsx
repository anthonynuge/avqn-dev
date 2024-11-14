import Image from "next/image";
import styles from "@styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Hello World</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
