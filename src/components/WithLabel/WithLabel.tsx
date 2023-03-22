import clsx from "clsx";
import React, { useMemo } from "react";

import styles from "./styles/WithLabel.module.css";

export type TWithLabelUnderLabelProps = {
  label?: string;
  type?: "success" | "error" | "warning" | "default";
  additionalNode?: React.ReactNode;
};

export type TWithLabel = {
  label?: string;
  underLabelProps?: TWithLabelUnderLabelProps;
  className?: string;
  offsetFromRow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  leftTopNode?: React.ReactNode;
  rightTopNode?: React.ReactNode;
};

export const WithLabel: React.FC<TWithLabel> = ({
  children,
  label,
  underLabelProps,
  className,
  offsetFromRow,
  style,
  leftTopNode,
  rightTopNode,
}) => {
  const underlabelColor = useMemo(() => {
    let color = "";
    if (underLabelProps?.type) {
      switch (underLabelProps.type) {
        case "success":
          color = "#28ad79";
          break;
        case "warning":
          color = "#rgb(218, 200, 99)";
          break;
        case "error":
          color = "#ee3f5f";
          break;
        case "default":
          color = "#7780af";
          break;
        default:
          return;
      }
    }
    return color;
  }, [underLabelProps?.type]);
  return (
    <div
      className={clsx(styles.WithLabel, className)}
      style={{ marginTop: offsetFromRow ? "20px" : "0", ...style }}
    >
      <div style={{ display: "flex" }}>
        {label && <div className={styles.WithLabelLabel}>{label}</div>}
        {leftTopNode && (
          <div style={{ margin: "0 10px 0 auto" }}>{leftTopNode}</div>
        )}
        {rightTopNode && (
          <div style={{ margin: leftTopNode ? "0" : "0 0 0 auto" }}>
            {rightTopNode}
          </div>
        )}
      </div>

      {children}
      {underLabelProps && (
        <div
          className={styles.WithLabelUnderlabel}
          style={{ color: underlabelColor }}
        >
          {underLabelProps.label}
          {underLabelProps?.additionalNode}
        </div>
      )}
    </div>
  );
};
