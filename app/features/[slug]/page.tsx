import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import { projects } from "../../data/projects";
import KahunaLabsContent from "../content/KahunaLabsContent";
import ConversationsDataContent from "../content/ConversationsDataContent";
import AgenticIntakeCoordinatorContent from "../content/AgenticIntakeCoordinatorContent";
import AiFirstBankContent from "../content/AiFirstBankContent";
import BrowserSecurityPortalContent from "../content/BrowserSecurityPortalContent";
import IdentityManagementPlatformContent from "../content/IdentityManagementPlatformContent";
import InsightAssistPerformanceContent from "../content/InsightAssistPerformanceContent";
import GenomicWorkflowDiscoveryContent from "../content/GenomicWorkflowDiscoveryContent";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

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
      <SiteHeader variant="dark" />

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
          {project.slug === "kahuna-labs" && <KahunaLabsContent />}
          {project.slug === "conversations-data" && <ConversationsDataContent />}
          {project.slug === "agentic-intake-coordinator" && (
            <AgenticIntakeCoordinatorContent />
          )}
          {project.slug === "ai-first-bank" && <AiFirstBankContent />}
          {project.slug === "ai-enabled-browser-security-management-portal" && (
            <BrowserSecurityPortalContent />
          )}
          {project.slug === "agentic-identity-management-platform" && (
            <IdentityManagementPlatformContent />
          )}
          {project.slug === "insight-assist-performance" && (
            <InsightAssistPerformanceContent />
          )}
          {project.slug === "genomic-workflow-discovery" && (
            <GenomicWorkflowDiscoveryContent />
          )}
        </section>

        <section className={styles.moreWorkSection}>
          <div className={styles.moreWorkHeadingRow}>
            <h2>More projects</h2>
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

      <SiteFooter />
    </main>
  );
}


