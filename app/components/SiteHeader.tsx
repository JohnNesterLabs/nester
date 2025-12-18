"use client";

import Link from "next/link";
import styles from "../page.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NESTER</div>
      <nav className={styles.nav}>
        <Link href="/#works">Work</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/blog">Blogs</Link>
      </nav>
      <button className={styles.navCta}>Let&apos;s talk</button>
      <button className={styles.menuToggle} aria-label="Toggle navigation">
        <span />
        <span />
      </button>
    </header>
  );
}


