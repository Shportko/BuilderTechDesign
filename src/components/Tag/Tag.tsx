import clsx from "clsx";
import styles from "./styles/Tag.module.css";

export type TTagTypes = "draft" | "published";

export type TTag = {
  children: React.ReactNode;
  type: TTagTypes;
};

export default function Tag({ children, type }: TTag) {
  return (
    <div
      className={clsx(styles.Tag, {
        [styles.TagDraft]: type === "draft",
        [styles.TagPublished]: type === "published",
      })}
    >
      <div className={styles.TagLabel}>{children}</div>
    </div>
  );
}
