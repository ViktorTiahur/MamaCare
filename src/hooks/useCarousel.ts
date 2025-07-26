import { useEffect, useState } from "react";

export function useCarousel<T>(items: T[], defaultPerPage = 3) {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(defaultPerPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setItemsPerPage(1);
      else if (width < 768) setItemsPerPage(2);
      else if (width < 1024) setItemsPerPage(defaultPerPage - 1);
      else setItemsPerPage(defaultPerPage);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultPerPage]);

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const visibleItems = items.slice(index, index + itemsPerPage);

  return {
    index,
    itemsPerPage,
    visibleItems,
    next,
    prev,
  };
}
