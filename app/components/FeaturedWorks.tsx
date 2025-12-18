"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { projects } from "../data/projects";
import type { RefObject } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

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

type FeaturedWorksSectionProps = {
  sectionRef?: RefObject<HTMLElement>;
};

export default function FeaturedWorksSection({ sectionRef }: FeaturedWorksSectionProps) {
  return (
    <motion.section
      id="works"
      className={styles.section}
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.sectionHeaderCentered}>
        <h2>Featured Works</h2>
      </div>
      <div className={styles.worksGrid}>
        {projects.slice(0, 4).map((project) => (
          <Link
            key={project.slug}
            href={`/features/${project.slug}`}
            className={styles.workCardLink}
          >
            <motion.article
              className={styles.workCard}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div
                className={styles.workMedia}
                style={{ backgroundImage: `url(${project.thumbnail})` }}
              />
              <div className={styles.workMeta}>
                <div>
                  <p className={styles.workTag}>{project.tag}</p>
                  <h3 className={styles.workTitle}>{project.title}</h3>
                </div>
                <span className={styles.workArrow}>↗</span>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
      <Link href="/features" className={styles.secondaryButton}>
        More Works
      </Link>
    </motion.section>
  );
}
