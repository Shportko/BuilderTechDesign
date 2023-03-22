import clsx from "clsx";
import React from "react";
import CustomButton, { TCustomButtonType } from "../CustomButton/CustomButton";
import styles from "./styles/SaveBackCancelControls.module.css";

export type TButtonProps = {
  buttonAction?: () => void;
  type?: TCustomButtonType;
  title?: string;
  disabled?: boolean;
};

export type TSaveBackCancelControls = {
  showBackButton?: boolean;
  backButtonProps?: TButtonProps;
  showCancelButton?: boolean;
  cancelButtonProps?: TButtonProps;
  showSaveButton?: boolean;
  saveButtonProps?: TButtonProps;
  style?: React.CSSProperties;
  className?: string;
  type?: "default" | "compact";
};

export const SaveBackCancelControls: React.FC<TSaveBackCancelControls> = ({
  showSaveButton = true,
  showCancelButton = true,
  showBackButton = true,
  backButtonProps,
  cancelButtonProps,
  saveButtonProps,
  style,
  className,
  type = "default",
}) => {
  return (
    <div
      className={clsx(styles.SaveBackCancelControls, className)}
      style={style}
    >
      {type === "default" ? (
        <>
          {showBackButton && (
            <CustomButton
              title={backButtonProps?.title || "Back"}
              type={backButtonProps?.type || "back"}
              onClick={backButtonProps?.buttonAction}
              style={{ margin: "0 auto 0 0" }}
              disabled={backButtonProps?.disabled}
            />
          )}
          {showCancelButton && (
            <CustomButton
              title={cancelButtonProps?.title || "Cancel"}
              type={cancelButtonProps?.type || "cancel"}
              onClick={cancelButtonProps?.buttonAction}
              style={{ margin: "0 0 0 auto" }}
              disabled={cancelButtonProps?.disabled}
            />
          )}
          {showSaveButton && (
            <CustomButton
              title={
                saveButtonProps?.title
                  ? saveButtonProps.title
                  : saveButtonProps?.type === "delete"
                  ? "Delete"
                  : "Save"
              }
              type={saveButtonProps?.type}
              onClick={saveButtonProps?.buttonAction}
              style={{ margin: "0 0 0 10px" }}
              disabled={saveButtonProps?.disabled}
            />
          )}{" "}
        </>
      ) : (
        <>
          <button
            style={{ cursor: "pointer" }}
            onClick={saveButtonProps?.buttonAction}
          >
            &#10003;
          </button>
          <button
            style={{ cursor: "pointer" }}
            onClick={cancelButtonProps?.buttonAction}
          >
            &#10005;
          </button>
        </>
      )}
    </div>
  );
};
