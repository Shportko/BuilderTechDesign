import { TContentItem } from "@/types/main";
import { Button } from "@mui/material";
import styles from "./styles/MediumMediaCard.module.css";

export default function MediumMediaCard({ item }: { item: TContentItem}) {
  return (
    <div className={styles.MediumMediaCard}>
      {/* <div
        style={{
          // margin: "10px",
          padding: "10px",
          border: "1px solid red",
          // display: "inline-block",
        }}
      > */}
      <div className={styles.MediumMediaCardTop}>
        {item?.images && item.images.length > 0 ? (
          <img src={item.images[0]?.src} alt={item.images[0]?.alt} />
        ) : (
          <img src={item?.image} alt={item?.alt} />
        )}
        <h3>{item?.shortTitle || item?.title}</h3>
        <p>
          {item?.description && `${item?.description[0]?.slice(0, 200)}...`}
        </p>
      </div>
      <div className={styles.MediumMediaCardBottom}>
        <div style={{ margin: "0px 55px" }}>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}
