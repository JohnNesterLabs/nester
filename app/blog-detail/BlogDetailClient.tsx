"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import detailStyles from "./detail.module.css";

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

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function sanitizeBasic(html: string) {
  if (!html) return "";
  return html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

export default function BlogDetailClient() {
  const searchParams = useSearchParams();
  const guidParam = searchParams.get("guid");
  const authorParam = searchParams.get("author");
  const idParam = searchParams.get("id");

  const [article, setArticle] = useState<FeedItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    if (!guidParam && !idParam) {
      setError("Missing article identifier.");
      setLoading(false);
      return;
    }

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

        const posts: FeedItem[] = allPosts.flat();
        let found: FeedItem | null = null;

        if (guidParam) {
          const target = decodeURIComponent(guidParam);
          if (authorParam) {
            const authorPosts = posts.filter((p) => p.authorName === authorParam);
            found =
              authorPosts.find((a) => (a.guid || a.link) === target) || null;
          } else {
            found = posts.find((a) => (a.guid || a.link) === target) || null;
          }
        }

        if (!found && idParam) {
          const idx = parseInt(idParam, 10);
          if (!Number.isNaN(idx)) {
            found = posts[idx] || null;
          }
        }

        if (!found) {
          setError("Sorry, this article could not be loaded.");
        } else {
          setArticle(found);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Sorry, this article could not be loaded.");
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
  }, [guidParam, authorParam, idParam]);

  const contentHtml =
    article && sanitizeBasic(article.content || article.description || "");

  if (loading) {
    return (
      <section className={detailStyles.articleSection}>
        <p className={detailStyles.statusText}>Loading article…</p>
      </section>
    );
  }

  if (error || !article) {
    return (
      <section className={detailStyles.articleSection}>
        <p className={detailStyles.errorText} id="article-error">
          {error || "Sorry, this article could not be loaded."}
        </p>
      </section>
    );
  }

  return (
    <section className={detailStyles.articleSection}>
      <article id="article-wrap" className={detailStyles.articleWrap}>
      <Link href="/blog" className={detailStyles.backLink}>
          <img src="/arrow.svg" alt="" className={detailStyles.backArrow} />
          Back to Blog
        </Link>
        <h1 className={detailStyles.postTitle}>{article.title}</h1>
        <div className={detailStyles.postMeta}>
          {article.author || ""} • {formatDate(article.pubDate)}
        </div>
        <div
          className={detailStyles.postContent}
          dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
        />
      </article>
    </section>
  );
}


