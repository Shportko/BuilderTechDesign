import React from "react";
import styles from "./styles/TableTopControls.module.css";
import clsx from "clsx";
import { CustomTextInput } from "../CustomTextInput";
import CustomButton from "../CustomButton/CustomButton";

export type TTableTopControls = {
  showAddButton?: boolean;
  addButtonTitle?: string;
  onClickRightButton?: () => void;
  showDeleteButton?: boolean;
  showChangeStatusButton?: boolean;
  searchInputProps?: {
    placeholder: string;
    onChangeValue?: (e: string) => void;
  };
  showRightControls?: boolean;
  rightControls?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const TableTopControls: React.FC<TTableTopControls> = ({
  showAddButton,
  addButtonTitle,
  onClickRightButton,
  searchInputProps,
  showRightControls,
  rightControls,
  style,
  className,
}) => {
  return (
    <div className={clsx(styles.TableTopControls, className)} style={style}>
      <div className={styles.TableTopControlsLeftSide}>
        <CustomTextInput
          onChange={searchInputProps?.onChangeValue}
          placeholder={searchInputProps?.placeholder}
        />
      </div>
      <div className={styles.TableTopControlsRightSide}>
        {showRightControls && <>{rightControls}</>}
        {showAddButton && (
          <CustomButton onClick={onClickRightButton}>
            {addButtonTitle}
          </CustomButton>
        )}
      </div>
    </div>
  );
};
