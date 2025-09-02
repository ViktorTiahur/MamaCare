import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link, useNavigate } from "react-router-dom";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Rating from "@/components/Rating/Rating";
import mockProducts from "@/data/mockProducts";
import getStringInCurrentLanguage from "@/utils/getStringInCurrentLanguage";

import styles from "./ProductReviewsPage.module.scss";

const PAGE_SIZE = 5;

const ProductReviewsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const product = mockProducts.find((p) => p.id === productId);
  const reviews = product?.reviews ?? [];

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(reviews.length / PAGE_SIZE));

  const avg = useMemo(() => {
    if (!reviews.length) return 0;
    return reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  }, [reviews]);

  const distribution = useMemo(() => {
    const map = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<
      1 | 2 | 3 | 4 | 5,
      number
    >;
    reviews.forEach((r) => {
      const n = Math.max(1, Math.min(5, Math.round(r.rating))) as
        | 1
        | 2
        | 3
        | 4
        | 5;
      map[n] += 1;
    });
    return map;
  }, [reviews]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return reviews.slice(start, start + PAGE_SIZE);
  }, [page, reviews]);

  if (!product) {
    return (
      <main className={styles.page}>
        <p>Product not found</p>
      </main>
    );
  }

  const title = getStringInCurrentLanguage(
    product.name,
    i18n.language as "en" | "uk"
  );

  return (
    <main className={styles.page} aria-label="Product Reviews Page">
      <Breadcrumbs
        category={getStringInCurrentLanguage(
          product.category,
          i18n.language as "en" | "uk"
        )}
        subcategory={getStringInCurrentLanguage(
          product.subcategory,
          i18n.language as "en" | "uk"
        )}
        productName={title}
      />

      <header className={styles.header}>
        <h1 className={styles.h1}>Customer’s rating</h1>

        <div className={styles.summaryGrid}>
          <div className={styles.avgBox}>
            <div className={styles.avgValue}>
              {avg.toFixed(1)} <span>/ 5</span>
            </div>
            <div className={styles.count}>
              ({reviews.length} {reviews.length === 1 ? "Review" : "Reviews"})
            </div>
            <div className={styles.stars}>
              <Rating value={avg} size={40} />
            </div>
          </div>

          <ul className={styles.distList} aria-label="Rating distribution">
            {[5, 4, 3, 2, 1].map((n) => {
              const cnt = distribution[n as 1 | 2 | 3 | 4 | 5];
              const pct = reviews.length
                ? Math.round((cnt / reviews.length) * 100)
                : 0;
              return (
                <li key={n} className={styles.distItem}>
                  <span className={styles.distLabel}>{n}</span>
                  <div className={styles.distBar}>
                    <span style={{ width: `${pct}%` }} />
                  </div>
                  <span className={styles.distPct}>{pct}%</span>
                </li>
              );
            })}
          </ul>
        </div>

        <button type="button" className={styles.leaveReviewBtn}>
          Leave Review
        </button>
      </header>

      <section className={styles.listSection}>
        <h2 className={styles.h2}>Customer’s reviews</h2>

        {/* Якщо відгуків 0..3 — дружнє повідомлення */}
        {reviews.length <= 3 && (
          <div className={styles.empty}>
            <p>
              This product has {reviews.length || "no"} review
              {reviews.length === 1 ? "" : "s"} yet.
            </p>
            <div className={styles.actions}>
              <button className={styles.leaveReviewBtn}>Leave Review</button>
              <button
                className={styles.backBtn}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                ← Back to Product
              </button>
            </div>
          </div>
        )}

        {/* Повний список (пагінація) */}
        {reviews.length > 3 && (
          <>
            <ul className={styles.reviewList}>
              {pageItems.map((r, i) => (
                <li
                  key={r.id ?? `rev-${(page - 1) * PAGE_SIZE + i}`}
                  className={styles.reviewItem}
                >
                  <div className={styles.avatarWrap} aria-hidden="true">
                    <img
                      src={r.avatar}
                      alt={r.author}
                      className={styles.avatar}
                    />
                  </div>

                  <div className={styles.body}>
                    <div className={styles.row1}>
                      <strong className={styles.author}>{r.author}</strong>
                      <span className={styles.sep}>|</span>
                      <Rating
                        value={Math.max(0, Math.min(5, Number(r.rating) || 0))}
                        size={20}
                      />
                    </div>

                    <div className={styles.meta}>
                      <span>Reviewed on</span>
                      {r.date && (
                        <time className={styles.date} dateTime={r.date}>
                          {new Date(r.date).toLocaleDateString("uk-UA", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </time>
                      )}
                    </div>

                    <p className={styles.text}>
                      {getStringInCurrentLanguage(
                        r.text,
                        i18n.language as "en" | "uk"
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {totalPages > 1 && (
              <nav className={styles.pagination} aria-label="Pagination">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const n = idx + 1;
                  return (
                    <button
                      key={n}
                      type="button"
                      className={`${styles.pageBtn} ${
                        page === n ? styles.active : ""
                      }`}
                      onClick={() => setPage(n)}
                      aria-current={page === n ? "page" : undefined}
                    >
                      {n}
                    </button>
                  );
                })}
              </nav>
            )}
          </>
        )}
      </section>

      <div className={styles.backWrap}>
        <Link to={`/product/${product.id}`} className={styles.backLink}>
          ← Back to Product
        </Link>
      </div>
    </main>
  );
};

export default ProductReviewsPage;
