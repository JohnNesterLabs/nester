"use client";

import Link from "next/link";
import styles from "../page.module.css";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

export default function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/Logo White.svg" : "/images/Logo_web 1.svg";

  return (
    <header
      className={`${styles.header} ${isDark ? styles.headerDark : ""}`}
    >
      <div className={styles.logo}>
        <Link href="/">
          <img
            src={logoSrc}
            alt="Nester"
            className={styles.logoImage}
          />
        </Link>
      </div>
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


