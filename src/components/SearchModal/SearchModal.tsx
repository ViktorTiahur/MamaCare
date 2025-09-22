import React, { useState } from "react";

import closeIcon from "../../assets/icons/icon-burger-close.svg";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";

import styles from "./SearchModal.module.scss";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface SearchModalProps {
  onClose: () => void;
}

const mockProducts: Product[] = [
  { id: 1, title: "Diapers", image: "/images/diaper.jpg", price: "$10" },
  { id: 2, title: "Baby Dishes", image: "/images/dishes.jpg", price: "$15" },
  { id: 3, title: "Baby Toys", image: "/images/toys.jpg", price: "$20" },
];

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon}>
            <img src={searchIcon} alt="Search" />
          </div>
          <input
            name="search"
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={onClose} className={styles.closeButton}>
            <img src={closeIcon} alt="Close" className={styles.closeButton} />
          </button>
        </div>
        <div className={styles.searchText}>
          <p>Enter keywords such as "diapers" or "baby dishes"</p>
        </div>

        {searchTerm && (
          <div className={styles.results}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
