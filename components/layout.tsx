import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <header className={styles.header}>
        <h1>My Portfolio</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
