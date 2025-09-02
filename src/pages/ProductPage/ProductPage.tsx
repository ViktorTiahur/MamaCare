import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import OpenReview from "@/assets/icons/arrow.svg?react";
import MinusIcon from "@/assets/icons/minus.svg?react";
import PlusIcon from "@/assets/icons/plus.svg?react";
import BabyBoxSection from "@/components/BabyBoxSection/BabyBoxSection";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImageCarousel from "@/components/ProductImageCarousel/ProductImageCarousel";
import Rating from "@/components/Rating/Rating";
import mockProducts from "@/data/mockProducts";
import getStringInCurrentLanguage from "@/utils/getStringInCurrentLanguage";

import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // продукт
  const product = mockProducts.find((p) => p.id === productId);

  // базові стейти
  // базові стейти
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.defaultColor ?? ""
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.defaultSize ?? ""
  );

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "materials" | "reviews"
  >("description");

  // відгуки
  const reviews = product?.reviews ?? [];

  // розгортання довгих коментарів
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [clampedMap, setClampedMap] = useState<Record<string, boolean>>({});
  const textRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

  const setTextRef = (id: string) => (el: HTMLParagraphElement | null) => {
    textRefs.current[id] = el;
  };

  // перерахунок клампу лише на вкладці Reviews
  useEffect(() => {
    if (activeTab !== "reviews") return;
    setClampedMap({});
    requestAnimationFrame(() => {
      Object.entries(textRefs.current).forEach(([id, el]) => {
        if (!el) return;
        el.classList.add(styles.clamp);
        const isClamped = el.scrollHeight > el.clientHeight + 1;
        setClampedMap((m) => ({ ...m, [id]: isClamped }));
        if (expandedMap[id]) el.classList.remove(styles.clamp);
      });
    });
  }, [productId, activeTab, reviews.length]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <main className={styles.productPage} aria-label="Product Page">
      {!product ? (
        <p>Product not found</p>
      ) : (
        <>
          <Breadcrumbs
            category={getStringInCurrentLanguage(
              product.category,
              i18n.language as "en" | "uk"
            )}
            subcategory={getStringInCurrentLanguage(
              product.subcategory,
              i18n.language as "en" | "uk"
            )}
            productName={getStringInCurrentLanguage(
              product.name,
              i18n.language as "en" | "uk"
            )}
          />

          <section className={styles.details} aria-label="Product Details">
            <section className={styles.gallery} aria-label="Product Images">
              <ProductImageCarousel images={product.images} />
            </section>

            <section className={styles.info} aria-label="Product Info">
              <h2 className={styles.title}>
                {getStringInCurrentLanguage(
                  product.name,
                  i18n.language as "en" | "uk"
                )}
              </h2>
              <div className={styles.rating}>
                <Rating value={averageRating} size={32} />
                <span className={styles.ratingText}>
                  {averageRating.toFixed(1)}/5 ({reviews.length})
                </span>
              </div>

              <p className={styles.price}>${product.price}</p>

              <form
                className={styles.options}
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("add to cart", {
                    productId,
                    selectedColor,
                    selectedSize,
                    quantity,
                  });
                }}
              >
                <fieldset className={styles.fieldset}>
                  <legend>Choose Color:</legend>
                  {product.availableColors.map((color) => (
                    <label key={color} className={styles.colorOption}>
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                      />
                      <span style={{ backgroundColor: color }} />
                    </label>
                  ))}
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <legend>Size:</legend>
                  {product.availableSizes.map((size) => (
                    <label key={size} className={styles.sizeOption}>
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(size)}
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </fieldset>

                <div className={styles.buttons}>
                  <div className={styles.quantitySelector}>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      className={styles.qtyBtn}
                      disabled={quantity <= 1}
                    >
                      <MinusIcon className={styles.minus} />
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={quantity}
                      className={styles.qtyInput}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.min(product.maxQuantity, prev + 1)
                        )
                      }
                      className={styles.qtyBtn}
                      disabled={quantity >= product.maxQuantity}
                    >
                      <PlusIcon className={styles.iconPlus} aria-label="Add" />
                    </button>
                  </div>

                  <button type="submit" className={styles.addToCart}>
                    Add to Cart
                  </button>
                </div>
              </form>
            </section>
          </section>

          <section className={styles.tabs} aria-label="Product Details">
            <nav className={styles.tabNav}>
              <button
                className={`${styles.tab} ${
                  activeTab === "description" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "materials" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("materials")}
              >
                Materials
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "reviews" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </nav>

            <div className={styles.tabContent}>
              {activeTab === "description" && (
                <p>
                  {getStringInCurrentLanguage(
                    product.description,
                    i18n.language as "en" | "uk"
                  )}
                </p>
              )}

              {activeTab === "materials" && (
                <p>
                  {getStringInCurrentLanguage(
                    product.materials,
                    i18n.language as "en" | "uk"
                  )}
                </p>
              )}

              {activeTab === "reviews" && (
                <div className={styles.reviewsSection}>
                  {/* Summary */}
                  <div className={styles.container}>
                    <div className={styles.reviewsSummary}>
                      <div className={styles.avgBox}>
                        <div className={styles.avgValue}>
                          {averageRating.toFixed(1)} <span>/ 5</span>
                        </div>
                        <div className={styles.count}>
                          ({reviews.length}{" "}
                          {reviews.length === 1 ? "Review" : "Reviews"})
                        </div>
                        <div className={styles.stars}>
                          <Rating value={averageRating} size={64} />
                        </div>
                      </div>

                      {/* Distribution 5..1 */}
                      <ul className={styles.distList}>
                        {[5, 4, 3, 2, 1].map((n) => {
                          const count = reviews.filter(
                            (r) => Math.round(r.rating) === n
                          ).length;
                          const pct = reviews.length
                            ? Math.round((count / reviews.length) * 100)
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
                  </div>

                  {/* Reviews list */}
                  <ul className={styles.reviewList}>
                    {(reviews.length > 3 ? reviews.slice(0, 3) : reviews).map(
                      (r, i) => {
                        const id = r.id ?? `rev-${i}`;
                        const expanded = !!expandedMap[id];
                        const canToggle = !!clampedMap[id];
                        return (
                          <li key={id} className={styles.reviewItem}>
                            <div className={styles.avatar} aria-hidden="true">
                              <img
                                src={r.avatar}
                                alt={r.author}
                                className={styles.avatar}
                              />
                            </div>

                            <div className={styles.reviewBody}>
                              <div className={styles.reviewHeader}>
                                <strong className={styles.author}>
                                  {r.author}
                                </strong>
                                <span>|</span>
                                <div className={styles.stars}>
                                  <Rating
                                    value={Math.max(
                                      0,
                                      Math.min(5, Number(r.rating) || 0)
                                    )}
                                    size={24}
                                  />
                                </div>
                              </div>

                              <div className={styles.time}>
                                <span>Reviewed on</span>
                                {r.date && (
                                  <time
                                    className={styles.date}
                                    dateTime={r.date}
                                  >
                                    {new Date(r.date).toLocaleDateString(
                                      "uk-UA",
                                      {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                      }
                                    )}
                                  </time>
                                )}
                              </div>

                              <p
                                ref={setTextRef(id)}
                                className={`${styles.text} ${
                                  expanded ? "" : styles.clamp
                                }`}
                              >
                                {getStringInCurrentLanguage(
                                  r.text,
                                  i18n.language as "en" | "uk"
                                )}
                              </p>

                              <button
                                type="button"
                                className={`${styles.toggleBtn} ${
                                  expanded ? styles.expanded : ""
                                }`}
                                aria-expanded={expanded}
                                aria-disabled={!canToggle}
                                disabled={!canToggle}
                                onClick={() => {
                                  if (!canToggle) return;
                                  setExpandedMap((m) => ({
                                    ...m,
                                    [id]: !expanded,
                                  }));
                                }}
                              >
                                <OpenReview
                                  className={styles.chevron}
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>

                  {/* Show All Reviews, якщо >3 */}
                  {reviews.length > 3 && (
                    <button
                      type="button"
                      className={styles.showAllBtn}
                      onClick={() =>
                        navigate(`/product/${product.id}/reviews?page=1`)
                      }
                    >
                      Show All Reviews
                    </button>
                  )}
                </div>
              )}
            </div>
          </section>

          <section className={styles.bundle} aria-label="Bundle Offers">
            <BabyBoxSection
              title="Upgrade to box to get cheaper deal!"
              responsive={[
                { upTo: 360, items: 1 },
                { upTo: 480, items: 2 },
                { upTo: 695, items: 4 },
                { upTo: Number.POSITIVE_INFINITY, items: 3 },
              ]}
              showButton={false}
            />
          </section>
        </>
      )}
    </main>
  );
};

export default ProductPage;
