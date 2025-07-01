import React, { useState, useMemo, useEffect, useRef } from "react";
import SubcategoryCarousel from "@/components/SubcategoryCarousel/SubcategoryCarousel";
import { SortOption } from "@/components/SortDropdown/SortDropdown";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import Card from "@/components/Card/Card";
import ProductFilterModal from "@/components/ProductFilterModal/ProductFilterModal";
import icon from "../../assets/icons/filters.svg";
import { Product } from "@/types/productInterface";

import styles from "./ProductCatalogPage.module.scss";

interface Subcategory {
  id: number;
  name: string;
  icon: string;
}

interface ProductCatalogProps {
  title: string;
  products: Product[];
  subcategories: Subcategory[];
}

const ProductCatalogPage: React.FC<ProductCatalogProps> = ({
  title,
  products,
  subcategories,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [sort, setSort] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState<Record<string, string[]>>({});

  const filterBtnRef = useRef<HTMLButtonElement>(null);

  const applyFilters = (selectedFilters: Record<string, string[]>) => {
    setFilters(selectedFilters);
    setTempFilters(selectedFilters);
  };

  useEffect(() => {
    if (isSortOpen || isFilterOpen) {
      setIsOverlayVisible(true);
    } else {
      const timeout = setTimeout(() => setIsOverlayVisible(false), 10);
      return () => clearTimeout(timeout);
    }
  }, [isSortOpen, isFilterOpen]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, activeId, filters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeId) {
      result = result.filter(
        (p) =>
          p.category ===
          subcategories.find((s) => s.id === activeId)?.name.toLowerCase()
      );
    }

    return result.filter((product) => {
      return Object.entries(filters).every(([key, values]) => {
        if (values.length === 0) return true;
        return values.includes(product[key as keyof Product] as string);
      });
    });
  }, [activeId, filters, products, subcategories]);

  const sortedProducts = useMemo(() => {
    let result = [...filteredProducts];
    switch (sort) {
      case "priceAsc":
        return result.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return result.sort((a, b) => b.price - a.price);
      case "newest":
        return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      default:
        return result;
    }
  }, [filteredProducts, sort]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProducts, currentPage]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const matchCount = useMemo(() => {
    return products.filter((product) => {
      return Object.entries(tempFilters).every(([key, values]) => {
        if (!values.length) return true;
        return values.includes(product[key as keyof Product] as string);
      });
    }).length;
  }, [products, tempFilters]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>

      <section className={styles.subcategories}>
        <SubcategoryCarousel
          subcategories={subcategories}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </section>

      <section className={styles.products}>
        <div className={styles.filters}>
          <button
            ref={filterBtnRef}
            onClick={() => {
              setIsSortOpen(false);
              setIsFilterOpen((prev) => !prev);
            }}
            className={styles.filterBtn}
          >
            <img src={icon} alt="filters button" /> <span>Filter By</span>
          </button>

          <ProductFilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={(selected) => {
              applyFilters(selected);
              setIsFilterOpen(false);
            }}
            matchCount={matchCount}
            selectedFilters={tempFilters}
            onChange={setTempFilters}
            triggerRef={filterBtnRef}
          />

          <SortDropdown
            selected={sort}
            onChange={(val) => {
              setSort(val);
              setIsSortOpen(false);
            }}
            isOpen={isSortOpen}
            setIsOpen={setIsSortOpen}
          />
        </div>

        <div className={styles.grid}>
          {paginatedProducts.length === 0 ? (
            <p className={styles.noProducts}>
              Немає товарів за заданими фільтрами
            </p>
          ) : (
            paginatedProducts.map((product) => (
              <Card
                key={product.id}
                title={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => console.log("Add to cart:", product.id)}
              />
            ))
          )}
        </div>

        <div className={styles.pagination}>
          <span>Page</span>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`${styles.pageBtn} ${
                currentPage === i + 1 ? styles.active : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>

      {isOverlayVisible && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsSortOpen(false);
            setIsFilterOpen(false);
            setIsOverlayVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductCatalogPage;
