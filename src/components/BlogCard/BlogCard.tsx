import { TContentItem } from "@/types/main";
import { getDateTimeShort } from "@/utils/DateTimeHelper";
import Link from "next/link";
import React from "react";

import styles from "./styles/BlogCard.module.css";

export type TBlogCard = {
  item: TContentItem;
};

export const BlogCard: React.FC<TBlogCard> = ({ item }) => {
  return (
    <section className={styles.BlogCard}>
      <div style={{ display: "flex" }}>
        <img src={item.image} alt={item.alt} />
      </div>

      <div className={styles.BlogCardDate}>
        {getDateTimeShort(item?.created_at || "")}
      </div>
      <h4>{item.title}</h4>
      <div className={styles.BlogCardDescription}>{`${
        item?.description && item.description[0]?.slice(0, 100)
      }...`}</div>
      <Link as={`/blog/${item.slug}`} href="/blog/[slug]">
        <div className={styles.BlogCardBottomButtom}>Read more</div>
      </Link>
    </section>
  );
};
