import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import star from "@/assets/icons/icon-star-24.svg";
import minus from "@/assets/icons/minus.svg";
import plus from "@/assets/icons/plus.svg";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImageCarousel from "@/components/ProductImageCarousel/ProductImageCarousel";
import mockProducts from "@/data/mockProducts";
import getStringInCurrentLanguage from "@/utils/getStringInCurrentLanguage";

import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { i18n } = useTranslation();
  const product = mockProducts.find((p) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(
    () => product?.defaultColor || ""
  );
  const [selectedSize, setSelectedSize] = useState(
    () => product?.defaultSize || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "materials" | "reviews"
  >("description");

  if (!product) return <p>Product not found</p>;

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
        product.reviews.length
      : 0;

  return (
    <div className={styles.productPage}>
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

      <div className={styles.container}>
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
            <div className={styles.ratingStar}>
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src={star}
                  alt="Star"
                  className={styles.star}
                  style={{
                    opacity: index < Math.round(averageRating) ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
            <span className={styles.ratingText}>
              {averageRating.toFixed(1)}/5 ({product.reviews.length})
            </span>
          </div>
          <p className={styles.price}>${product.price}</p>

          <form
            className={styles.options}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("add to cart", {
                productId: productId,
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
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className={styles.qtyBtn}
                  disabled={quantity <= 1}
                >
                  <img src={minus} alt="Remove one item" />
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
                  <img src={plus} alt="Add one item" />
                </button>
              </div>

              <button type="submit" className={styles.addToCart}>
                Add to Cart
              </button>
            </div>
          </form>
        </section>
      </div>

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

          {activeTab === "reviews" &&
            (product.reviews.length > 0 ? (
              <ul className={styles.reviewList}>
                {product.reviews.map((r) => (
                  <li key={r.id} className={styles.review}>
                    <strong>{r.author}</strong> – {r.rating}/5
                    <p>{r.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            ))}
        </div>
      </section>

      <section className={styles.bundle} aria-label="Bundle Offers">
        <h2 className={styles.bundleTitle}>
          Upgrade to box to get cheaper deal!
        </h2>
        {/* Продукти-бокси */}
      </section>
    </div>
  );
};

export default ProductPage;
