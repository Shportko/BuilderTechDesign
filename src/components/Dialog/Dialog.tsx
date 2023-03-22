import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { SaveBackCancelControls } from "../SaveBackCancelControls";

import styles from "./styles/Dialog.module.css";

export type TDialog = {
  title?: string;
  className?: string;
  onClickMainAction: () => void;
  isMainActionButtonDisabled?: boolean;
  showMainActionButton?: boolean;
  mainActionButtonTitle?: string;
  selfClose: (dialogKey: string) => void;
  dialogKey: string;
  type?: "save" | "delete";
  rightTopProps?: React.ReactNode;
  needToCalculateHeight?: boolean;
  children?: React.ReactNode;
  cancelButtonTitle?: string;
  showBottomControls?: boolean;
  style?: React.CSSProperties;
};

export const Dialog: React.FC<TDialog> = ({
  children,
  title,
  className,
  onClickMainAction: onSave,
  isMainActionButtonDisabled,
  mainActionButtonTitle,
  selfClose,
  dialogKey,
  type = "save",
  rightTopProps,
  needToCalculateHeight,
  showMainActionButton = true,
  cancelButtonTitle,
  showBottomControls = true,
  style = {},
}) => {
  const [modalXPosition, setModalXPosition] = useState<number>(0);
  const [dialogHeight, setDialogHeight] = useState<number>(0);
  const dialogRef = useRef<any>(null);

  // calculate dialog position to be on the center of the screen
  useEffect(() => {
    if (dialogRef.current) {
      const modalWidthPixels = dialogRef.current.offsetWidth;
      const windowWidthPixels = window.innerWidth;
      const halfModalWidthPercentage =
        (modalWidthPixels / 2 / windowWidthPixels) * 100;
      setModalXPosition(50 - halfModalWidthPercentage);
    }
  }, [dialogRef]);

  // calculate dialog height to fit the screen
  useEffect(() => {
    if (dialogRef.current) {
      const windowHeightPixels = window.innerHeight;
      const dialogHeight = windowHeightPixels * 0.6;
      setDialogHeight(dialogHeight);
    }
  }, [dialogRef]);
  return (
    <div
      className={styles.DialogOverlay}
      onClick={() => {
        selfClose(dialogKey);
      }}
    >
      <div
        className={clsx(styles.Dialog, className, {})}
        style={{ ...style, left: `${modalXPosition}%` }}
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <div className={styles.DialogTop} ref={dialogRef}>
          <div className={styles.DialogTopTitle}>{title || "Dialog"}</div>
          <div className={styles.DialogTopRightTopElement}>
            {rightTopProps && rightTopProps}
          </div>
          <div
            className={styles.DialogTopCloseButton}
            onClick={() => selfClose(dialogKey)}
          >
            x
          </div>
        </div>
        <div className={styles.DialogMid}>
          <div
            className={styles.DialogMidScrollable}
            style={needToCalculateHeight ? { height: `${dialogHeight}px` } : {}}
          >
            {children}
          </div>
        </div>
        {showBottomControls && (
          <div className={styles.DialogBottom}>
            <SaveBackCancelControls
              showBackButton={false}
              showSaveButton={showMainActionButton}
              cancelButtonProps={{
                buttonAction: () => selfClose(dialogKey),
                title: cancelButtonTitle || "Cancel",
              }}
              saveButtonProps={{
                buttonAction: () => {
                  onSave();
                },
                type,
                title: mainActionButtonTitle,
                disabled: isMainActionButtonDisabled,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
