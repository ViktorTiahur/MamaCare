"use client";
import { useEffect, useMemo, useState } from "react";

export type ResponsiveRule = { upTo: number; items: number }; // правило: якщо width < upTo → items

type Options = {
  fixed?: number;                 // якщо передано — завжди стільки показувати
  responsive?: ResponsiveRule[];  // інакше: набір правил
  fallback?: number;              // дефолт до першого перерахунку (SSR safe)
};

export function useResponsiveItems({ fixed, responsive, fallback = 3 }: Options) {
  const rules = useMemo<ResponsiveRule[]>(
    () =>
      (responsive && responsive.length
        ? [...responsive].sort((a, b) => a.upTo - b.upTo)
        : [
            // дефолтні правила 
            { upTo: 360, items: 1 },
            { upTo: 480, items: 2 },
            { upTo: 768, items: 3 },
            { upTo: Number.POSITIVE_INFINITY, items: 4 },
          ]),
    [responsive]
  );

  const [count, setCount] = useState<number>(fixed ?? fallback);

  useEffect(() => {
    if (fixed != null) return; // в фіксованому режимі нічого не слухаємо

    const calc = () => {
      const w = window.innerWidth;
      const match = rules.find((r) => w < r.upTo) ?? rules[rules.length - 1];
      setCount(match.items);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [fixed, rules]);

  return count;
}
