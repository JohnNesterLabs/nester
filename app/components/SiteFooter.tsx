"use client";

import styles from "../page.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <p className={styles.footerLabel}>About</p>
          <div className={styles.footerLinks}>
            <a href="#works">Work</a>
            <a href="/blog">Blog</a>
            <a href="#contact">Let&apos;s Talk</a>
          </div>
        </div>
        <div>
          <p className={styles.footerLabel}>Location</p>
          <p className={styles.footerText}>701 Lakeway Dr #200,</p>
          <p className={styles.footerText}>Sunnyvale CA - 94085,</p>
          <p className={styles.footerText}>United States</p>
        </div>
        <div>
          <p className={styles.footerLabel}>Contact</p>
          <div className={styles.footerLinks}>
            <a href="#">LinkedIn</a>
            <a href="mailto:contact@nesterlabs.com">contact@nesterlabs.com</a>
            <a href="tel:+14086731340">+1 (408) 673-1340</a>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <span>2025 © NESTERLABS</span>
        </div>
      </div>
    </footer>
  );
}


