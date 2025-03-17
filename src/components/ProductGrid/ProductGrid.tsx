import React from "react";
import styles from "./ProductGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  link: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
  itemsPerRow: number;
  rows: number;
  buttonText: string;
  buttonLink: string;
  customClass?: string; // Проп для кастомних стилів
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products,
  itemsPerRow,
  rows,
  buttonText,
  buttonLink,
  customClass = "", // За замовчуванням порожній клас
}) => {
  const visibleProducts = products.slice(0, itemsPerRow * rows);

  return (
    <div className={`${styles.productGrid} ${customClass}`}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button as="a" href={buttonLink} className={styles.button}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ProductGrid;
