"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const testimonials = [
  {
    quote:
      "Pure Visuals has an incredible eye for detail. Their ability to translate abstract ideas into stunning visuals is unmatched.",
    name: "Emma Reynolds",
    role: "Creative Director — Visionary Agency"
  },
  {
    quote:
      "Working with Pure Visuals was a seamless experience. Their team is professional, creative, and truly understands how to bring a brand’s vision to life.",
    name: "Liam Carter",
    role: "Founder — Carter & Co. Photography"
  },
  {
    quote:
      "From concept to execution, Pure Visuals delivered beyond what we imagined. The visuals they created for our campaign drove meaningful engagement.",
    name: "Sophia Nguyen",
    role: "Marketing Lead — Elevate Studios"
  }
];

const heroBackgrounds = [
  "radial-gradient(circle at top, rgba(15,23,42,0.3), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/1853507/pexels-photo-1853507.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  "radial-gradient(circle at top, rgba(15,23,42,0.3), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  "radial-gradient(circle at top, rgba(15,23,42,0.3), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  "radial-gradient(circle at top, rgba(15,23,42,0.3), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600')"
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Scroll-based motion for hero images and hero text
  // Images slide well past the viewport while the hero stays sticky
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 1], ["150%", "0%", "-8%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6], [0, 1, 1]);

  // Random background cycling for left / right hero images
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % heroBackgrounds.length);
      setRightIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <header className={styles.header}>
        <div className={styles.logo}>PureVisuals</div>
        <nav className={styles.nav}>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className={styles.navCta}>Get Template</button>
        <button className={styles.menuToggle} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
      </header>

      {/* Hero – scroll-controlled split images pinned while next section comes up */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.hero}>
          <motion.div
            className={styles.heroImages}
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              className={`${styles.heroImage} ${styles.heroImageLeft}`}
              style={{
                x: leftX,
                backgroundImage: heroBackgrounds[leftIndex]
              }}
            />
            <motion.div
              className={`${styles.heroImage} ${styles.heroImageRight}`}
              style={{
                x: rightX,
                backgroundImage: heroBackgrounds[rightIndex]
              }}
            />
          </motion.div>

          <div className={styles.heroOverlay}>
            <motion.div
              className={styles.heroTitleBlock}
              style={{ y: textY, opacity: textOpacity }}
            >
              <p className={styles.heroTitleLine}>
                REIMAGINING INTELLIGENCE
              </p>
              <p className={styles.heroTitleLine}>THROUGH RESEARCH, DESIGN &amp;</p>
              <p className={styles.heroTitleLine}>TECHNOLOGY</p>

              <div className={styles.heroCornerRow}>
                <div className={styles.heroCornerLabel}>
                  <span>AI ACCELERATED STUDIO</span>
                  <span>BASED IN SF BAY AREA</span>
                </div>
                <div className={styles.heroCornerLabel}>
                  <span>BLENDING CREATIVITY &amp; STRATEGY</span>
                  <span>FOR SEAMLESS EXPERIENCES</span>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Who We Are */}
      <motion.section
        id="about"
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.sectionHeader}>
          <h2>Who We Are</h2>
          <p>
            At Pure Visuals, we craft striking visual narratives through
            photography, videography, and creative direction. We bring brands,
            stories, and concepts to life with a refined artistic touch.
          </p>
        </div>
        <div className={styles.mediaRow}>
          <div className={styles.mediaCard} />
          <div className={styles.mediaCard} />
          <div className={styles.mediaCard} />
        </div>
      </motion.section>

      {/* Featured Works */}
      <motion.section
        id="works"
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.sectionHeader}>
          <h2>Featured Works</h2>
          <p>
            A showcase of our finest creations—where creativity meets impact.
            Each project reflects our passion for design and innovation.
          </p>
        </div>
        <div className={styles.worksGrid}>
          <WorkCard title="Liquid Fusion" tag="Food & Beverage" />
          <WorkCard title="Hyper Drive" tag="Product" />
          <WorkCard title="Eclipse Studio" tag="Product" />
          <WorkCard title="Archive_199X" tag="Visual Direction" />
        </div>
        <button className={styles.secondaryButton}>More Works</button>
      </motion.section>

      {/* Services */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.sectionHeader}>
          <h2>Our Services</h2>
        </div>
        <div className={styles.servicesGrid}>
          <ServiceColumn
            title="Photography"
            items={[
              "Commercial Photography",
              "Portrait Photography",
              "Architectural Photography",
              "Event Photography"
            ]}
          />
          <ServiceColumn
            title="Videography"
            items={[
              "Brand Films",
              "Social Media Content",
              "Aerial Videography",
              "Event Videography",
              "Cinematic Productions"
            ]}
          />
          <ServiceColumn
            title="Visual Direction"
            items={[
              "Art Direction",
              "Wardrobe & Fashion Styling",
              "Visual Strategy",
              "Set & Prop Styling",
              "Storytelling"
            ]}
          />
          <ServiceColumn
            title="Post-Production & Retouching"
            items={[
              "Photo Editing & Retouching",
              "Color Correction & Grading",
              "Video Editing",
              "3D & CGI Integration"
            ]}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        id="contact"
        className={styles.ctaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaHeading}>
              Turning imagination
              <br />
              into reality.
            </h2>
            <p className={styles.ctaText}>
              Ready to bring your next visual story to life? Let&apos;s talk.
            </p>
          </div>
          <button className={styles.primaryButton}>Let&apos;s Talk</button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.footerLabel}>About</p>
            <div className={styles.footerLinks}>
              <a href="#works">Works</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
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
            <p className={styles.footerLabel}>Socials</p>
            <div className={styles.footerLinks}>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>2025 © PureVisuals</span>
        </div>
      </footer>
    </main>
  );
}

function WorkCard({ title, tag }: { title: string; tag: string }) {
  return (
    <motion.article
      className={styles.workCard}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className={styles.workMedia} />
      <div className={styles.workMeta}>
        <div>
          <p className={styles.workTag}>{tag}</p>
          <h3 className={styles.workTitle}>{title}</h3>
        </div>
        <span className={styles.workArrow}>↗</span>
      </div>
    </motion.article>
  );
}

function ServiceColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      className={styles.serviceColumn}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}


