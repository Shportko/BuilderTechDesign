import { TContentItem } from "@/types/main";
import { Button } from "@mui/material";
import styles from "./styles/MobileMediaCard.module.css";

export default function MobileMediaCard({ item }: { item: TContentItem }) {
  return (
    <div className={styles.MobileMediaCard}>
      <div className={styles.MobileMediaCardTop}>
        {item?.images && item.images.length > 0 ? (
          <img src={item.images[0]?.src} alt={item.images[0]?.alt} />
        ) : (
          <img src={item?.image} alt={item?.alt} />
        )}
        <div className={styles.MobileMediaCardTopTitle}>
          {item?.shortTitle || item?.title}
        </div>
      </div>
      <div className={styles.MobileMediaCardMid}>
        {item?.description && `${item.description[0]?.slice(0, 120)}...`}
      </div>
      <div className={styles.MobileMediaCardBottom}>
        <div>
          <Button>More</Button>
        </div>
        {/* <div>
          <Button>Share</Button>
        </div> */}
      </div>
    </div>
  );
}
