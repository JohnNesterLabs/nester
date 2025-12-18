"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import blogStyles from "./blog.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type FeedItem = {
  title: string;
  link: string;
  guid?: string;
  pubDate: string;
  thumbnail?: string;
  description?: string;
  content?: string;
  author?: string;
  categories?: string[];
  authorName: string;
};

const FEED_APIS = [
  {
    url:
      "https://api.rss2json.com/v1/api.json?rss_url=" +
      encodeURIComponent("https://medium.com/feed/@kunal_nester"),
    author: "kunal"
  },
  {
    url:
      "https://api.rss2json.com/v1/api.json?rss_url=" +
      encodeURIComponent("https://medium.com/feed/@abhijith.mulimani"),
    author: "abhijith"
  }
];

function stripHtml(html: string) {
  if (!html) return "";
  const div = typeof window !== "undefined" ? window.document.createElement("div") : null;
  if (!div) return "";
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
}

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export default function BlogList() {
  const [posts, setPosts] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      FEED_APIS.map((feedConfig) =>
        fetch(feedConfig.url)
          .then((r) => r.json())
          .then((data) => {
            if (!data || !Array.isArray(data.items)) return [];
            return data.items
              .filter((it: any) => (it.categories || []).length > 0)
              .map((item: any) => ({ ...item, authorName: feedConfig.author }));
          })
          .catch(() => {
            return [];
          })
      )
    )
      .then((allPosts) => {
        if (cancelled) return;
        const flattened: FeedItem[] = allPosts.flat();
        flattened.sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
        setPosts(flattened);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Sorry, articles could not be loaded right now.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className={styles.main}>
      <SiteHeader />

      <section className={blogStyles.blogSection}>
        <div className={blogStyles.blogHeader}>
          <h1 className={blogStyles.blogTitle}>Journal</h1>
          <p className={blogStyles.blogSubtitle}>
            Thoughts, experiments, and perspectives from the PureVisuals studio.
          </p>
        </div>

        {loading && <p className={blogStyles.statusText}>Loading articles…</p>}
        {error && <p className={blogStyles.errorText}>{error}</p>}

        {!loading && !error && (
          <div className={blogStyles.mediumGrid} id="medium-grid">
            {posts.map((article, index) => {
              const rawExcerpt =
                stripHtml(article.description || article.content || "") || "";
              const excerpt =
                rawExcerpt
                  .split(/\s+/)
                  .slice(0, 35)
                  .join(" ") + (rawExcerpt ? "…" : "");

              const img = article.thumbnail || "";
              const guid = encodeURIComponent(article.guid || article.link);

              return (
                <article key={`${article.guid || article.link}-${index}`} className={blogStyles.mediumCard}>
                  {img ? (
                    <img src={img} alt={article.title} className={blogStyles.mediumImage} />
                  ) : null}
                  <div className={blogStyles.mediumCardBody}>
                    <div className={blogStyles.mediumCardDate}>
                      {formatDate(article.pubDate)}
                    </div>
                    <h3 className={blogStyles.mediumCardTitle}>{article.title}</h3>
                    <div className={blogStyles.mediumCardAuthor}>
                      by {article.author || ""}
                    </div>
                    <p className={blogStyles.mediumCardExcerpt}>{excerpt}</p>
                    <Link
                      className={blogStyles.mediumCardLink}
                      href={`/blog-detail?guid=${guid}&author=${article.authorName}`}
                    >
                      Read more 
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}


