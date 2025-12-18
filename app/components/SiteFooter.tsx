"use client";

import styles from "../page.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <p className={styles.footerLabel}>About</p>
          <div className={styles.footerLinks}>
            <a href="/#works">Works</a>
            <a href="/#about">About</a>
            <a href="/blog">Blog</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
        <div>
          <p className={styles.footerLabel}>Location</p>
          <p className={styles.footerText}>
            245 Park Ave
            <br />
            New York, NY 10110
            <br />
            United States
          </p>
        </div>
        <div>
          <p className={styles.footerLabel}>Contact</p>
          <div className={styles.footerLinks}>
            <a href="mailto:contact@nesterlabs.com">contact@nesterlabs.com</a>
            <a href="tel:+1-408-673-1340">+1 (408) 673 1340</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <span>2025 © Nesterlabs</span>
        </div>
      </div>
    </footer>
  );
}


