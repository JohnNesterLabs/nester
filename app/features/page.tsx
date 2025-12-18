import Link from "next/link";
import styles from "../page.module.css";
import { projects } from "../data/projects";

export default function FeaturesPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>PureVisuals</div>
        <nav className={styles.nav}>
          <a href="/#works">Features</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <button className={styles.navCta}>Get Template</button>
        <button className={styles.menuToggle} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
      </header>

      <section className={styles.worksPageSection}>
        <div className={styles.sectionHeaderCentered}>
          <h2>All Works</h2>
        </div>
        <div className={styles.worksGrid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/features/${project.slug}`}
              className={styles.workCardLink}
            >
              <article className={styles.workCard}>
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
              </article>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.footerLabel}>About</p>
            <div className={styles.footerLinks}>
              <a href="/#works">Features</a>
              <a href="/#about">About</a>
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
