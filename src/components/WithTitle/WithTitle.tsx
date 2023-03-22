import clsx from "clsx";
import React, { useMemo } from "react";

import styles from "./styles/WithTitle.module.css";

export type TWithTitle = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  noStyling?: boolean;
  noPadding?: boolean;
  rightButton?: React.ReactNode;
};

export const WithTitle: React.FC<TWithTitle> = ({
  children,
  className,
  style,
  title,
  noStyling = false,
  noPadding = false,
  rightButton,
}) => {
  let clsN = clsx(styles.WithTitle, className);
  let h3ClsN = styles.WithTitleTitle;
  if (noStyling) {
    clsN = className || "";
  } else if (noPadding) {
    clsN = clsx(styles.WithTitle, styles.WithTitleNoPadding, className);
    h3ClsN = clsx(styles.WithTitleTitle, styles.WithTitleTitleNoPadding);
  }
  return (
    <div className={clsN} style={{ ...style }}>
      <div className={styles.WithTitleTopControls}>
        {title && <h3 className={h3ClsN}>{title}</h3>}
        <div className={styles.WithTitleTopControlsRight}>{rightButton}</div>
      </div>
      {children}
    </div>
  );
};
