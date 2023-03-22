import React, { useState } from "react";
import styles from "./styles/CustomTextInput.module.css";
import { Input as MUIInput } from "@material-ui/core";
import { TWithLabelUnderLabelProps, WithLabel } from "../WithLabel";

export type TTextInput = {
  labelProps?: {
    label?: string;
  };
  underLabelProps?: {
    label?: string;
    additionalNode?: React.ReactNode;
  };
  offsetFromRow?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
  multiline?: boolean;
  multilineModeProps?: {
    rows: number;
  };
  onBlur?: () => void;
  onFocus?: () => void;
  ref?: React.RefObject<HTMLDivElement>;
  type?: "text" | "number" | "password";
  disabled?: boolean;
  inputValue?: string;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onPressEnter?(): void;
  error?: boolean | string;
  name?: string;
};

export const CustomTextInput = React.forwardRef<HTMLDivElement, TTextInput>(
  (
    {
      labelProps,
      offsetFromRow,
      defaultValue,
      onChange,
      style,
      className,
      multiline,
      multilineModeProps,
      onBlur,
      onFocus,
      type,
      disabled,
      inputValue,
      placeholder,
      startAdornment,
      endAdornment,
      underLabelProps,
      onPressEnter,
      error,
      name,
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const combinedStyle: React.CSSProperties = {
      marginTop: "0px",
      fontSize: "15px",
      width: "100%",
      padding: multiline ? "7px 10px" : "2px 10px",
      borderRadius: "3px",
      transition: "0.2s",
      border: `1px solid ${hovered ? "grey" : "#bcc0c5"}`,
      ...style,
    };

    let errorMessage = "";
    if (typeof error === "boolean") {
      errorMessage = "Error";
    } else if (typeof error === "string" && error !== "") {
      errorMessage = error;
    }

    let underLabelprops: TWithLabelUnderLabelProps = {
      label: underLabelProps?.label,
      type: "default",
      additionalNode: underLabelProps?.additionalNode,
    };

    if (errorMessage !== "") {
      underLabelprops = {
        label: errorMessage,
        type: "error",
      };
      combinedStyle.border = "1px solid red";
    }

    return (
      <WithLabel
        label={labelProps?.label}
        underLabelProps={underLabelprops}
        className={styles.TextInput}
        offsetFromRow={offsetFromRow}
      >
        <MUIInput
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          placeholder={placeholder}
          disableUnderline
          disabled={disabled}
          type={type}
          ref={ref}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          multiline={multiline}
          rows={multilineModeProps?.rows}
          style={combinedStyle}
          defaultValue={defaultValue}
          value={inputValue}
          onChange={(e) => onChange && onChange(e.target.value)}
          classes={{
            root: "mui-text-input",
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onPressEnter && onPressEnter();
            }
          }}
        />
      </WithLabel>
    );
  }
);

CustomTextInput.displayName = "CustomTextInput";
