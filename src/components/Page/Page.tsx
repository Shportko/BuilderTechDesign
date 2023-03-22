import clsx from "clsx";
import styles from "./styles/Page.module.css";

export default function Page({
  style,
  className,
  children,
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main className={clsx(styles.Page, className)} style={{ ...style }}>
      {children}
    </main>
  );
}
