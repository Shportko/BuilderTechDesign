import { Button } from "@mui/material";
import { MouseEventHandler } from "react";
import styles from "./CustomButton.module.css";

export type TCustomButtonType =
  | "blue-filled"
  | "main-stroke"
  | "white-filled"
  | "white-stroke"
  | "back"
  | "cancel"
  | "delete"
  | "delete-stroke"
  // | "delete-small-filled"
  | "save"
  | "orange-filled"
  | "orange-stroke"
  | "purple-filled"
  | "purple-stroke";

export type TCustomButtonSize = "small" | "medium" | "large";

export type TCustomButtonProps = {
  title?: string;
  type?: TCustomButtonType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  size?: TCustomButtonSize;
};

export default function CustomButton({
  title,
  type = "blue-filled",
  style,
  className,
  children,
  onClick,
  disabled = false,
  size = "large",
}: TCustomButtonProps): JSX.Element {
  const getStypeSize = (size: TCustomButtonSize): React.CSSProperties => {
    switch (size) {
      case "small":
        return {
          borderRadius: "10px",
          padding: "2px 2px 1px 2px",
          fontSize: "0.6em",
        };
      case "medium":
        return {
          borderRadius: "4px",
          padding: "2px 10px",
          fontSize: "0.8em",
        };
      case "large":
        return {
          borderRadius: "3px",
          padding: "7px 13px",
        };
      default:
        return {};
    }
  };
  const getStyle = (
    type: TCustomButtonType,
    disabled: boolean
  ): React.CSSProperties => {
    const basicStyle: React.CSSProperties = {
      textTransform: "none",
      ...getStypeSize(size),
    };

    if (disabled) {
      return {
        ...basicStyle,
        backgroundColor: "lightgrey",
        color: "white",
      };
    }

    switch (type) {
      case "blue-filled":
        return {
          ...basicStyle,
          backgroundColor: "#1262da",
          color: "white",
          border: "1px solid #1262da",
        };
      case "main-stroke":
        return {
          ...basicStyle,
          border: "1px solid #1262da",
          backgroundColor: "white",
          color: "#1262da",
        };
      case "white-filled":
        return {
          ...basicStyle,
          backgroundColor: "white",
          color: "black",
          border: "1px solid white",
        };
      case "white-stroke":
        return {
          ...basicStyle,
          backgroundColor: "transparent",
          color: "white",
          border: "1px solid white",
        };
      case "save":
        return {
          ...basicStyle,
          backgroundColor: "#28ad79",
          color: "white",
          border: "1px solid #28ad79",
        };
      case "cancel":
        return {
          ...basicStyle,
          backgroundColor: "transparent",
          color: "#7780af",
          border: "1px solid transparent",
        };
      case "delete":
        return {
          ...basicStyle,
          backgroundColor: "#ee3f5f",
          color: "white",
          border: "1px solid #ee3f5f",
        };
      case "delete-stroke":
        return {
          ...basicStyle,
          backgroundColor: "white",
          color: "#ee3f5f",
          border: "1px solid #ee3f5f",
        };
      // case "delete-small-filled":
      //   return {
      //     ...basicStyle,
      //     backgroundColor: "#ee3f5f",
      //     color: "white",
      //     border: "1px solid #ee3f5f",
      //   };
      case "orange-filled":
        return {
          ...basicStyle,
          backgroundColor: "#ee6b3f",
          color: "white",
          border: "1px solid #ee6b3f",
        };
      case "orange-stroke":
        return {
          ...basicStyle,
          backgroundColor: "white",
          color: "#ee6b3f",
          border: "1px solid #ee6b3f",
        };
      case "purple-filled":
        return {
          ...basicStyle,
          backgroundColor: "#7746b3",
          color: "white",
          border: "1px solid #7746b3",
        };
      case "purple-stroke":
        return {
          ...basicStyle,
          backgroundColor: "white",
          color: "#7746b3",
          border: "1px solid #7746b3",
        };
      default:
        return { ...basicStyle };
    }
  };
  const customStyle = getStyle(type, disabled);
  return (
    <Button
      disabled={disabled}
      style={{ ...customStyle, ...style }}
      className={className ? className : styles.CustomButton}
      onClick={onClick}
    >
      {title ? title : children}
    </Button>
  );
}

// export default function CustomButton({
//     title,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return <Button></Button>;
// }

// export async function getStaticProps() {
// const titl
//   return {
//     props: {title},
//   };
// }
