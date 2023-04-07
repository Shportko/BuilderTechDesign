import { TContentItem } from "@/types/main";
import { Button } from "@mui/material";
import styles from "./styles/SmallMediaCard.module.css";

export default function SmallMediaCard({ item }: { item: TContentItem }) {
  return (
    <>
      {item && (
        <div className={styles.SmallMediaCard}>
          <div className={styles.SmallMediaCardLeft}>
            {item?.images && item.images.length > 0 ? (
              <img src={item.images[0]?.src} alt={item.images[0]?.alt} />
            ) : (
              <img src={item?.image} alt={item?.alt} />
            )}
          </div>
          <div className={styles.SmallMediaCardRight}>
            <div className={styles.SmallMediaCardRightTop}>
              {item?.shortTitle || item?.title}
            </div>
            <div className={styles.SmallMediaCardRightMid}>
              {item?.description && `${item.description[0]?.slice(0, 120)}...`}
            </div>
            {}
          </div>
        </div>
      )}
    </>
  );
}
