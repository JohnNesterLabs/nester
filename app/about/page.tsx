"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";
import aboutStyles from "./about.module.css";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <SiteHeader variant="dark" />

      {/* Who We Are */}
      <motion.section
        className={`${styles.whoSection} ${aboutStyles.whoSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={aboutStyles.whoHeaderRow}>
          <div className={aboutStyles.whoTitleContainer}>
            <h2>Who We Are</h2>
          </div>
          <p className={`${styles.whoDescription} ${aboutStyles.whoDescription}`}>
            Our founders collectively bring more than 85 years of expertise in helping businesses integrate advanced technologies and optimise their existing product experiences.
          </p>
        </div>
        <div className={`${styles.whoGrid} ${aboutStyles.whoGrid}`}>
          <div className={styles.whoCard}>
            <div
              className={styles.whoPhoto}
              style={{ backgroundImage: "url('/images/About/Frame 311.jpg')" }}
            />
            <div className={styles.whoMeta}>
              <p className={styles.whoName}>Ankur Richhariya</p>
              <p className={styles.whoRole}>Product</p>
            </div>
          </div>
          <div className={styles.whoCard}>
            <div
              className={styles.whoPhoto}
              style={{ backgroundImage: "url('/images/About/Frame 312.jpg')" }}
            />
            <div className={styles.whoMeta}>
              <p className={styles.whoName}>Kunal Shrivastava</p>
              <p className={styles.whoRole}>Technology</p>
            </div>
          </div>
          <div className={styles.whoCard}>
            <div
              className={styles.whoPhoto}
              style={{ backgroundImage: "url('/images/About/Frame 314.jpg')" }}
            />
            <div className={styles.whoMeta}>
              <p className={styles.whoName}>Shrey Malik</p>
              <p className={styles.whoRole}>Design</p>
            </div>
          </div>
          <div className={styles.whoCard}>
            <div
              className={styles.whoPhoto}
              style={{ backgroundImage: "url('/images/About/Frame 313.jpg')" }}
            />
            <div className={styles.whoMeta}>
              <p className={styles.whoName}>Gaurav Gupta</p>
              <p className={styles.whoRole}>Information</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA + Footer */}
      <motion.section
        className={styles.finalSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.finalCtaRow}>
          <div className={styles.finalCtaText}>
            <h2 className={styles.finalHeading}>
              <span className={styles.finalHeadingLine}>Turning imagination</span>
              <span className={styles.finalHeadingLine}>into reality</span>
            </h2>
            <Link href="/contact" className={styles.finalLinkButton}>Let&apos;s Talk</Link>
          </div>
        </div>

        <SiteFooter />
      </motion.section>
    </main>
  );
}
