import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import { projects } from "../../data/projects";

type FeatureDetailPageProps = {
  params: { slug: string };
};

export default function FeatureDetailPage({ params }: FeatureDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const moreProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 4);

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

      <article className={styles.workDetailSection}>
        <header className={styles.workDetailHeader}>
          <h1 className={styles.workDetailTitle}>{project.title}</h1>

          <div className={styles.workDetailMetaRow}>
            <div className={styles.workDetailMetaItem}>
              <span>Industry</span>
              <span>{project.industry}</span>
            </div>
            <div className={styles.workDetailMetaItem}>
              <span>Year</span>
              <span>{project.year}</span>
            </div>
            <div className={styles.workDetailMetaItem}>
              <span>Client</span>
              <span>{project.client}</span>
            </div>
          </div>
        </header>

        <section className={styles.workDetailBody}>
          <p>
            We designed this project as an exploration into how intelligent systems can
            feel warm, cinematic and deeply human while still being rigorously
            functional. It blends motion, sound and spatial composition to create a
            product story that unfolds over time rather than on a single static screen.
          </p>
          <p>
            This is placeholder copy for now – you can replace it with your own case
            study narrative, process notes, research insights and visual breakdowns.
          </p>
        </section>

        <section className={styles.moreWorkSection}>
          <div className={styles.moreWorkHeadingRow}>
            <h2>More work</h2>
          </div>
          <div className={styles.moreWorkCarousel}>
            {moreProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/features/${item.slug}`}
                className={styles.moreWorkCard}
              >
                <div
                  className={styles.moreWorkMedia}
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                />
                <div className={styles.moreWorkMeta}>
                  <p className={styles.workTag}>{item.tag}</p>
                  <h3 className={styles.moreWorkTitle}>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

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


