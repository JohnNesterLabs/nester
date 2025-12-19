"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import SiteHeader from "./components/SiteHeader";
import FeaturedWorksSection from "./components/FeaturedWorks";

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
      "From the initial consultation to the final implementation, Nesterlabs demonstrated exceptional thought leadership and development skills.",
    name: "Amit Utkarsh Sinha",
    role: "CEO - Basepair",
    avatar: "/testimonial/t3.jpeg"
  },
  {
    quote:
      "Nesterlabs foresaw the rise of agentic AI and convinced us to look in that direction. Their strategic insight and precise execution put us ahead of the competition.",
    name: "Abhijit Das",
    role: "Founder, CTO - The Coupon Bureau",
    avatar: "/testimonial/t2.jpeg"
  },
  {
    quote:
      "Our platform is now a hundred times better because of the UX vision plus product development expertise of the Nesterlabs team.",
    name: "Ratandeep Bhattacharjee",
    role: "Director, Product Management - GoogleEx-Slack, Oracle",
    avatar: "/testimonial/t4.jpeg"
  },
  {
    quote:
      "Nesterlabs helped us strategize, envision and build our MVP. A true sense of partnership emerged on this journey, as I could see them caring as much about the idea as we did.",
    name: "Ambrish Tyagi",
    role: "CEO - Banky",
    avatar: "/testimonial/t1.jpeg"
  }
];

// Use pure images for hero backgrounds (no dark overlay), so white images stay pure
const heroBackgrounds = [
  "url('/images/hero-1.png')",
  "url('/images/hero-2.png')",
  "url('/images/hero-3.png')",
  "url('/images/hero-4.png')"
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);
  const serviceStackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const { scrollYProgress: worksYProgress } = useScroll({
    target: worksRef,
    offset: ["start start", "start start"]
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
  const [testimonialIndex, setTestimonialIndex] = useState(1); // Start at 1 for infinite loop
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [headerVariant, setHeaderVariant] = useState<"light" | "dark">("light");
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Create extended testimonials array for infinite loop: [last, ...all, first]
  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % heroBackgrounds.length);
      setRightIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Switch header variant based on when the Featured Works section reaches the top of the viewport.
  // - Before the top of Featured Works hits the viewport top: use "light"
  // - Once it hits (and after): use "dark"
  useMotionValueEvent(worksYProgress, "change", (latest) => {
    if (latest >= 1) {
      setHeaderVariant("dark");
    } else {
      setHeaderVariant("light");
    }
  });

  // Handle service card stacking with fade effect
  useEffect(() => {
    const serviceStack = serviceStackRef.current;
    if (!serviceStack) return;

    const cards = Array.from(serviceStack.children) as HTMLElement[];
    if (cards.length === 0) return;

    const handleScroll = () => {
      // Responsive sticky position based on screen size
      const isMobile = window.innerWidth <= 640;
      const isTablet = window.innerWidth <= 1024 && window.innerWidth > 640;
      const stickyTop = isMobile ? 180 : isTablet ? 220 : 300; // matches CSS top values

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        
        // Check if this card is currently sticky (at the sticky position)
        const isSticky = cardRect.top <= stickyTop && cardRect.bottom > stickyTop;
        
        // Get the next card
        const nextCard = cards[index + 1];

        // Remove faded class from all cards first
        card.classList.remove('faded');
        
        // If this card is sticky and next card exists, fade the next card
        if (isSticky && nextCard) {
          const nextCardRect = nextCard.getBoundingClientRect();
          // Fade the next card if it's approaching the sticky position
          if (nextCardRect.top > stickyTop) {
            nextCard.classList.add('faded');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle infinite loop for testimonials
  useEffect(() => {
    // Reset position after animation completes when at boundaries
    if (testimonialIndex === 0 && isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Use requestAnimationFrame to ensure instant reset
        requestAnimationFrame(() => {
          setTestimonialIndex(extendedTestimonials.length - 2);
        });
      }, 600);
      return () => clearTimeout(timer);
    }
    if (testimonialIndex === extendedTestimonials.length - 1 && isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Use requestAnimationFrame to ensure instant reset
        requestAnimationFrame(() => {
          setTestimonialIndex(1);
        });
      }, 600);
      return () => clearTimeout(timer);
    }
    if (isTransitioning && testimonialIndex > 0 && testimonialIndex < extendedTestimonials.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [testimonialIndex, extendedTestimonials.length, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTestimonialIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTestimonialIndex((prev) => prev - 1);
  };

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <SiteHeader variant={headerVariant} />

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
              <div className={styles.heroTitleDesktop}>
                <p className={styles.heroTitleLine}>
                  REIMAGINING INTELLIGENCE
                </p>
                <p className={styles.heroTitleLine}>THROUGH RESEARCH, DESIGN &amp;</p>
                <p className={styles.heroTitleLine}>TECHNOLOGY</p>
              </div>

              <div className={styles.heroTitleMobile}>
                <p className={styles.heroTitleLine}>
                  REIMAGINING 
                </p>
                <p className={styles.heroTitleLine}>INTELLIGENCE THROUGH </p>
                <p className={styles.heroTitleLine}>RESEARCH, DESIGN &amp; TECHNOLOGY</p>
              </div>

              <div className={styles.heroCornerRow}>
                <div
                  className={`${styles.heroCornerLabel} ${styles.heroCornerLabelLeft}`}
                >
                  <span>AI ACCELERATED STUDIO</span>
                  <span>BASED IN SF BAY AREA</span>
                </div>
                <div
                  className={`${styles.heroCornerLabel} ${styles.heroCornerLabelRight}`}
                >
                  <span>BLENDING CREATIVITY &amp; STRATEGY</span>
                  <span>FOR SEAMLESS EXPERIENCES</span>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Featured Works */}
      <FeaturedWorksSection sectionRef={worksRef} />

      {/* Services */}
      <motion.section
        className={styles.servicesSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.servicesTitleRow}>
          <h2>Our Services</h2>
        </div>
        <div className={styles.servicesDivider} />

        <div ref={serviceStackRef} className={styles.serviceStack}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceCardColumns}>
              <div className={styles.serviceCardLabel}>Human</div>
              <ul>
                <li>Research</li>
                <li>Product Design</li>
                <li>Voice &amp; Emotion</li>
              </ul>
              <ul>
                <li>Strategy</li>
                <li>Brand &amp; Identity</li>
                <li>Immersive Experiences</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceCardColumns}>
              <div className={styles.serviceCardLabel}>Intelligence</div>
              <ul>
                <li>Agentic AI &amp; MCP</li>
                <li>Natural Language Engines</li>
                <li>Prosody &amp; Analysis</li>
              </ul>
              <ul>
                <li>RAG &amp; Context</li>
                <li>Emotion Strategy</li>
                <li>Synthesizing + Output</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceCardColumns}>
              <div className={styles.serviceCardLabel}>Memory</div>
              <ul>
                <li>Knowledge Graph &amp; Retrieval</li>
                <li>Analysis Pipelines</li>
              </ul>
              <ul>
                <li>Context Streamlining</li>
                <li>Privacy &amp; Guardrails</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceCardColumns}>
              <div className={styles.serviceCardLabel}>Cloud</div>
              <ul>
                <li>Cloud &amp; AI Platforms</li>
                <li>Infra Security &amp; Compliance</li>
              </ul>
              <ul>
                <li>DevOps &amp; CI/CD</li>
                <li>Global Reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        id="about"
        className={styles.whoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.whoTitleRow}>
          <h2>Who We Are</h2>
        </div>
        <p className={styles.whoDescription}>
          Our founders collectively bring more than 85 years of expertise in helping businesses integrate advanced technologies and optimise their existing product experiences.
        </p>
        <div className={styles.whoGrid}>
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

      {/* What They Said – testimonial carousel */}
      <motion.section
        className={styles.testimonialSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.testimonialTitleRow}>
          <h2>What They Said</h2>
        </div>

        <div className={styles.testimonialBody}>
        <div className={styles.testimonialSlider}>
            <motion.div
              ref={trackRef}
              className={styles.testimonialTrack}
              animate={{
                x: `-${testimonialIndex * 100}%`
              }}
              transition={{
                type: "tween",
                duration: isTransitioning ? 0.6 : 0,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialSlide}>
                  <p className={styles.testimonialQuote}>
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className={styles.testimonialName}>
                    {testimonial.name}
                  </p>
                  <p className={styles.testimonialRole}>
                    {testimonial.role}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className={styles.testimonialNav}>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        </div>
      </motion.section>

      {/* Final CTA + Footer */}
      <motion.section
        id="contact"
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
            <button className={styles.finalLinkButton}>Let&apos;s Talk</button>
          </div>
        </div>

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
      </motion.section>
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


