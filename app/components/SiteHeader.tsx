"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

export default function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/Logo White.svg" : "/images/Logo_web 1.svg";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.headerDark : ""}`}
      >
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
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
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </header>
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMenu}>
          <nav className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.mobileMenuClose}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
            <Link href="/#works" onClick={closeMenu}>Work</Link>
            <Link href="/#about" onClick={closeMenu}>About Us</Link>
            <Link href="/blog" onClick={closeMenu}>Blogs</Link>
            <button className={styles.mobileMenuCta} onClick={closeMenu}>Let&apos;s Talk</button>
          </nav>
        </div>
      )}
    </>
  );
}


