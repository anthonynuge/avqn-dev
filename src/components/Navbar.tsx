"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "@styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const toggleMenu = () => {
    // setIsOpen(!isOpen);
    if (isOpen) {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsFadingOut(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };

  return (
    // <div>Navbar</div>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={styles.hamburgerToggle} onClick={toggleMenu}>
        <span
          className={`${styles.hamBar} ${isOpen ? styles.xTop : ""}`}
        ></span>
        <span
          className={`${styles.hamBar} ${isOpen ? styles.xMid : ""}`}
        ></span>
        <span
          className={`${styles.hamBar} ${isOpen ? styles.xBot : ""}`}
        ></span>
      </div>
      {isOpen && (
        // <div className={styles.navOverlay}>
        <div
          className={`${styles.navOverlay} ${
            isFadingOut ? styles.fadeOut : styles.fadeIn
          } `}
        >
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
