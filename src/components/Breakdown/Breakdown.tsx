import { smoothScroll } from "@/utils/SmoothScroll";
import Link from "next/link";
import styles from "./styles/Breakdown.module.css";

export type TBreakdown = {
  title?: string;
  points?: string[];
  id?: string;
};

export const Breakdown: React.FC<TBreakdown> = ({ title, points, id }) => {
  return (
    <section className={styles.Breakdown} id={id}>
      {title && <h3>{title}</h3>}
      {points && points.length > 0 && (
        <div className={styles.BreakdownItemsContainer}>
          {points.map((el: string, i: number) => {
            return (
              <div
                className={styles.BreakdownItem}
                onClick={() => {
                  smoothScroll(100, true, 0, el);
                }}
                key={i}
              >
                <div className={styles.BreakdownItemLeft}>{i + 1}</div>
                <div className={styles.BreakdownItemRight}>{el}</div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
