"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "@styles/Navbar.module.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    // <div>Navbar</div>
    <nav className={`${styles.navbar} ${isActive ? styles.active : ""}`}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isActive ? "✖" : "☰"}
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
