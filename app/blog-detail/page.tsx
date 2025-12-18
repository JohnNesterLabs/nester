import { Suspense } from "react";
import styles from "../page.module.css";
import detailStyles from "./detail.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BlogDetailClient from "./BlogDetailClient";

export default function BlogDetailPage() {
  return (
    <main className={styles.main}>
      <SiteHeader />

      <Suspense
        fallback={
          <section className={detailStyles.articleSection}>
            <p className={detailStyles.statusText}>Loading article…</p>
          </section>
        }
      >
        <BlogDetailClient />
      </Suspense>

      <SiteFooter />
    </main>
  );
}

