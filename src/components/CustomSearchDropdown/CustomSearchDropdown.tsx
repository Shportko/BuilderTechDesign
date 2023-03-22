import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles/CustomSearchDropdown.module.css";
import { styled } from "@mui/material/styles";
import { TWithLabelUnderLabelProps, WithLabel } from "../WithLabel";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "7px",
    "& .MuiOutlinedInput-input": {
      fontSize: "15px",
      margin: "0px",
      padding: "0px",
      height: "23px",
    },
  },
});

export type TDropdownItem = {
  value: string;
  title: string;
};

export type TCustomSearchDropdown = {
  options: TDropdownItem[];
  labelProps?: {
    label: string;
  };
  underLabelProps?: {
    label?: string;
    additionalNode?: React.ReactNode;
  };
  defaultValue?: TDropdownItem;
  inputValue?: TDropdownItem;
  onOptionSelect?: (value: TDropdownItem | null) => void;
  style?: React.CSSProperties;
  className?: string;
  inputType?: "text" | "password" | "color";
  disabled?: boolean;
  offsetFromRow?: boolean;
  endAdornment?: React.ReactNode;
  width?: number;
  placeholder?: string;
  error?: boolean | string;
};

export const CustomSearchDropdown: React.FC<TCustomSearchDropdown> = ({
  options,
  labelProps,
  defaultValue,
  onOptionSelect,
  style,
  className,
  inputType,
  disabled,
  offsetFromRow,
  inputValue,
  endAdornment,
  width,
  placeholder,
  error,
  underLabelProps,
}) => {
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
  }

  return (
    <WithLabel
      label={labelProps?.label}
      offsetFromRow={offsetFromRow}
      style={width ? { width: `${width}px` } : {}}
      underLabelProps={underLabelprops}
    >
      <Autocomplete
        disabled={disabled}
        defaultValue={defaultValue}
        value={inputValue}
        disablePortal
        options={options}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => onOptionSelect && onOptionSelect(value)}
        renderInput={(params) => (
          <CssTextField
            {...params}
            type={inputType}
            style={{
              marginTop: "0px",
              ...style,
            }}
            className={styles.CustomSearchDropdown}
            placeholder={placeholder}
          />
        )}
      />
      {endAdornment}
    </WithLabel>
  );
};
