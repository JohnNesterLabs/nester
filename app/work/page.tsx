import Link from "next/link";
import styles from "../page.module.css";
import { projects } from "../data/projects";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <SiteHeader variant="dark" />

      <section className={styles.worksPageSection}>
        <div className={styles.sectionHeaderCentered}>
          <h2>Featured Works</h2>
          <p className={styles.sectionHeaderSub}>
            A showcase of our finest creations&mdash;where creativity meets impact. From bold
            branding to immersive digital experiences, each project reflects our passion for design
            and innovation. Explore how we bring ideas to life through thoughtful execution and
            striking visuals.
          </p>
        </div>
        <div className={styles.worksGrid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={styles.workCardLink}
            >
              <article className={styles.workCard}>
                <div
                  className={styles.workMedia}
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                />
                <div className={styles.workMeta}>
                  <div>
                    <h3 className={styles.workTitle}>{project.title}</h3>
                    <p className={styles.workTag}>{project.tag}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
