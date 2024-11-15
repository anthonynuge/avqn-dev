import Image from "next/image";
import styles from "@styles/page.module.css";
import Socials from "@app/components/Socials";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Hello World</main>
      <Socials />
      <footer className={styles.footer}></footer>
    </div>
  );
}
