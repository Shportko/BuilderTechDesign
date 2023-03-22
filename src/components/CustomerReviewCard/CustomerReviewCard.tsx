import React from "react";

import styles from "./styles/CustomerReviewCard.module.css";
import yelp from "../../Assets/png/Yelp_Logo.png";
import { TCustomerReviewItem } from "@/types/main";
import { StarsRate } from "../StartsRate/StartsRate";
import { getDateTimeShort } from "@/utils/DateTimeHelper";

export type TCustomerReviewCard = {
  item?: TCustomerReviewItem;
  isVisible?: boolean;
  onClick?: () => void;
};

export const CustomerReviewCard: React.FC<TCustomerReviewCard> = ({
  item,
  isVisible = true,
  onClick,
}) => {
  return (
    <section
      className={styles.CustomerReviewCard}
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <h4
        style={{
          margin: "0 0 10px 0",
        }}
      >
        {item?.title}
      </h4>
      <div className={styles.CustomerReviewCardText}>
        {item?.text && item.text.length > 150
          ? `${item?.text.slice(0, 250)}...`
          : item?.text}
      </div>
      <div className={styles.CustomerReviewCardBottom}>
        <div className={styles.CustomerReviewCardBottomLeft}>
          <div className={styles.CustomerReviewCardBottomLeftLeft}>
            <img src={item?.photoUrl} alt={item?.photoUrl} />
          </div>
          <div className={styles.CustomerReviewCardBottomLeftRight}>
            <div
              style={{
                margin: "5px 0 0 10px",
                fontWeight: "bold",
                fontSize: "0.9em",
              }}
            >
              {item?.name}
            </div>
            <StarsRate
              style={{ margin: "5px 0 0 5px" }}
              rate={item?.rate}
              size="small"
            />
          </div>
        </div>
        <div className={styles.CustomerReviewCardBottomRight}>
          {/* <img
            src={yelp}
            alt="nico pro construction yelp"
            width={"50px"}
            onClick={onClick}
          /> */}
          <div style={{ fontSize: "0.7em" }}>
            {item?.created_at && getDateTimeShort(item?.created_at)}
          </div>
        </div>
      </div>
    </section>
  );
};
