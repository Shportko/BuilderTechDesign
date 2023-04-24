import { TContentItem } from "@/types/main";
import { Button } from "@mui/material";
import styles from "./styles/MediumMediaCardService.module.css";


export default function MediumMediaCardService({ item }: { item: TContentItem}) {
  return (
    <div className={styles.MediumMediaCardService}>
      <div className={styles.MediumMediaCardTopService}>
        {item?.images && item.images.length > 0 ? (
          <img src={item.images[0]?.src} alt={item.images[0]?.alt} />
        ) : (
          <img src={item?.image} alt={item?.alt} />
        )}
        <h3>{item?.shortTitle || item?.title}</h3>
        <p>
          {item?.description && `${item?.description[0]?.slice(0, 440)}`}
        </p>
        <div style={{ margin: "0px 55px", color:"#0837ab"}}>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}
