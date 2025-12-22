"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../page.module.css";

type SiteHeaderProps = {
  variant?: "light" | "dark";
  isHeroTextAtTop?: boolean;
  areHeroImagesVisible?: boolean;
};

export default function SiteHeader({ variant = "light", isHeroTextAtTop = false, areHeroImagesVisible = true }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/Logo White.svg" : "/images/Logo_web 1.svg";

  // Remove backdrop filter when hero images are visible (mobile + home page only)
  const shouldRemoveBackdrop = isHomePage && areHeroImagesVisible;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.headerDark : ""} ${isHeroTextAtTop ? styles.headerHeroTextAtTop : ""} ${isHomePage ? styles.headerHomePage : styles.headerOtherPages} ${shouldRemoveBackdrop ? styles.headerNoBackdrop : ""}`}
      >
        <div className={styles.headerContainer}>
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
            <Link href="/work">Work</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blogs</Link>
            {/* <Link href="https://nesteraibot.web.app/" target="_blank" rel="noopener noreferrer">NesterAI</Link> */}
          </nav>
          <Link href="/contact" className={styles.navCta}>Let&apos;s Talk</Link>
          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""} ${isDark ? styles.menuToggleOther : styles.menuToggleHome}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
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
              <Link href="/work" onClick={closeMenu}>Work</Link>
              <Link href="/about" onClick={closeMenu}>About Us</Link>
              <Link href="/blog" onClick={closeMenu}>Blogs</Link>
              {/* <Link href="https://nesteraibot.web.app/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Nester AI</Link> */}
              <Link href="/contact" className={styles.mobileMenuCta} onClick={closeMenu}>Let&apos;s Talk</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}


