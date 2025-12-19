"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

type SiteHeaderProps = {
  variant?: "light" | "dark";
  isHeroTextAtTop?: boolean;
};

export default function SiteHeader({ variant = "light", isHeroTextAtTop = false }: SiteHeaderProps) {
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
        className={`${styles.header} ${isDark ? styles.headerDark : ""} ${isHeroTextAtTop ? styles.headerHeroTextAtTop : ""}`}
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
        <Link href="/contact" className={styles.navCta}>Let&apos;s talk</Link>
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
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileMenuLogo}>
                <Link href="/" onClick={closeMenu}>
                  <img
                    src="/images/Logo_web 1.svg"
                    alt="Nester"
                    className={styles.logoImage}
                  />
                </Link>
              </div>
              <button 
                className={styles.mobileMenuClose}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className={styles.mobileMenuItems}>
              <Link href="/#works" onClick={closeMenu}>Work</Link>
              <Link href="/#about" onClick={closeMenu}>About Us</Link>
              <Link href="/blog" onClick={closeMenu}>Blogs</Link>
              <Link href="/contact" className={styles.mobileMenuCta} onClick={closeMenu}>Let&apos;s Talk</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}


