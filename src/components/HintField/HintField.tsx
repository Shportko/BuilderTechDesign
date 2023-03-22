import clsx from "clsx";
import styles from "./styles/HintField.module.css";

export type THintFieldColor =
  | "alarm"
  | "warning"
  | "success"
  | "info"
  | "default";

export default function HintField({
  children,
  type = "default",
  title,
}: {
  children: React.ReactNode;
  type?: THintFieldColor;
  title?: string;
}) {
  let className = `${styles.HintField}`;
  switch (type) {
    case "default":
      className = `${styles.HintField} ${styles.HintFieldDefault}`;
      break;
    case "alarm":
      className = `${styles.HintField} ${styles.HintFieldAlarm}`;
      break;
    case "warning":
      className = `${styles.HintField} ${styles.HintFieldWarning}`;
      break;
    case "info":
      className = `${styles.HintField} ${styles.HintFieldInfo}`;
      break;
    case "success":
      className = `${styles.HintField} ${styles.HintFieldSuccess}`;
      break;
    default:
      className = `${styles.HintField} ${styles.HintFieldDefault}`;
      break;
  }

  return (
    <div className={className} style={{}}>
      {title && <div className={styles.HintFieldTitle}>{title}</div>}
      {children}
    </div>
  );
}
