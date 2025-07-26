import { useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImageCarousel from "@/components/ProductImageCarousel/ProductImageCarousel";
import mockProducts from "@/data/mockProducts";

import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
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

  return (
    <div className={styles.productPage}>
      <Breadcrumbs
        category={product.category}
        subcategory={product.subcategory}
        productName={product.name}
      />

      <div className={styles.container}>
        <section className={styles.gallery} aria-label="Product Images">
          <ProductImageCarousel images={product.images} />
        </section>

        <section className={styles.info} aria-label="Product Info">
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{product.price}</p>
          <div className={styles.rating}>
            {product.reviews.length > 0
              ? (
                  product.reviews.reduce((acc, r) => acc + r.rating, 0) /
                  product.reviews.length
                ).toFixed(1)
              : "No ratings yet"}{" "}
            / 5
          </div>

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
              <legend>Choose Color</legend>
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
              <legend>Choose Size</legend>
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

            <label className={styles.quantityLabel}>
              Quantity:
              <input
                type="number"
                min="1"
                max={product.maxQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className={styles.quantityInput}
              />
            </label>

            <button type="submit" className={styles.addToCart}>
              Add to Cart
            </button>
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
          {activeTab === "description" && <p>{product.description}</p>}

          {activeTab === "materials" && <p>{product.materials}</p>}

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
