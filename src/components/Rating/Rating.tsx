import Star from "@/assets/icons/icon-star.svg?react";

import styles from "./Rating.module.scss";

type Props = {
  value: number;
  size?: number;
  count?: number;
  className?: string;
};

export default function Rating({
  value,
  size = 24,
  count = 5,
  className,
}: Props) {
  return (
    <div
      className={`${styles.rating} ${className ?? ""}`}
      style={{ "--size": `${size}px` }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i)); // 0..1
        return (
          <span
            key={i}
            className={styles.starWrap}
            style={{ "--fill": `${fill * 100}%` }}
          >
            <Star className={styles.base} aria-hidden />
            <span className={styles.clip}>
              <Star className={styles.top} aria-hidden />
            </span>
          </span>
        );
      })}
    </div>
  );
}
