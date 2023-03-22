import styles from "./styles/LayoutControls.module.css";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

const colors: TContentItemColors[] = [
  "red",
  "blue",
  "green",
  "orange",
  "white",
  "yellow",
  "grey",
  "black",
  "transparent",
];

export type TContentItemColors =
  | "red"
  | "blue"
  | "green"
  | "orange"
  | "white"
  | "yellow"
  | "grey"
  | "black"
  | "transparent";

export type TLayoutControlsState = {
  width: "25%" | "33.33%" | "50%" | "66.66%" | "75%" | "100%";
  textAlign: "left" | "center" | "right" | "justify";
  color: TContentItemColors;
  backgroundColor: TContentItemColors;
} & React.CSSProperties;

export default function LayoutControls({
  showTextAlignmentData = true,
  onChangeStyle,
  onAddHtmlTag,
  styleData,
}: {
  showTextAlignmentData?: boolean;
  onChangeStyle?: (style: string) => void;
  onAddHtmlTag?: (data: string) => void;
  styleData?: string | undefined;
}) {
  const [state, setState] = useState<TLayoutControlsState>({
    width: "100%",
    backgroundColor: "transparent",
    color: "black",
    textAlign: "left",
  });

  useEffect(() => {
    if (styleData) {
      setState(JSON.parse(styleData) as TLayoutControlsState);
    }
  }, [styleData]);

  // background color menu controls
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // text color manu controls
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: any) => {
    event.stopPropagation();
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const customButtonStyle: React.CSSProperties = {
    fontSize: "0.6em",
    color: "grey",
    border: "1px solid grey",
    width: "30px",
    borderRadius: "3px",
    padding: "3px 0",
    textAlign: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    margin: "1px 0 0 0",
  };
  const customButtonStyleSelected: React.CSSProperties = {
    color: "white",
    backgroundColor: "grey",
  };

  return (
    <div
      className={styles.LayoutControls}
      style={{
        margin: "0 30px 5px 30px",
        border: "1px solid lightgrey",
        padding: "1px",
        borderRadius: "3px",
      }}
    >
      {showTextAlignmentData && (
        <div style={{ display: "flex", margin: "2px 10px 0 0" }}>
          <div
            style={{
              padding: "2px 0",
              cursor: "pointer",
              margin: "0 4px",
              color:
                state.color === "white" || state.color === "transparent"
                  ? `grey`
                  : `${state.color}`,
            }}
            onClick={handleClick2}
          >
            {"A"}
          </div>
          <div
            style={{ padding: "2px 0", cursor: "pointer" }}
            onClick={handleClick}
          >
            <FormatColorFillIcon
              style={{
                fontSize: "1em",
                margin: "0px",
                color:
                  state.backgroundColor === "white" ||
                  state.backgroundColor === "transparent"
                    ? `grey`
                    : `${state.backgroundColor}`,
              }}
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              {colors.map((el: TContentItemColors, i: number) => {
                return (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      //   setState((prevState: TLayoutControlsState) => ({
                      //     ...prevState,
                      //     backgroundColor: el,
                      //   }));
                      onChangeStyle &&
                        onChangeStyle(
                          JSON.stringify({ ...state, backgroundColor: el })
                        );
                      handleClose();
                    }}
                    style={{ padding: "1px" }}
                  >
                    <div
                      key={i}
                      style={{
                        backgroundColor: `${el}`,
                        color: "transparent",
                        padding: "0 10px",
                        border:
                          el === "transparent"
                            ? "2px dotted ligthgrey"
                            : "1px solid ligthgrey",
                      }}
                    >
                      {"-"}
                    </div>
                  </MenuItem>
                );
              })}
            </div>
          </Menu>
          <Menu
            id="basic-menu-2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              {colors.map((el: TContentItemColors, i: number) => {
                return (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      //   setState((prevState: TLayoutControlsState) => ({
                      //     ...prevState,
                      //     color: el,
                      //   }));
                      onChangeStyle &&
                        onChangeStyle(JSON.stringify({ ...state, color: el }));
                      handleClose2();
                    }}
                    style={{ padding: "1px" }}
                  >
                    <div
                      key={i}
                      style={{
                        backgroundColor: `${el}`,
                        color: "transparent",
                        padding: "0 10px",
                        border: "1px solid ligthgrey",
                      }}
                    >
                      {"-"}
                    </div>
                  </MenuItem>
                );
              })}
            </div>
          </Menu>
        </div>
      )}
      <div style={{ margin: "0 5px" }}>
        <div style={{ display: "flex", marginTop: "2px" }}>
          <div
            style={
              state.width === "25%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "25%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "25%" }));
            }}
          >
            1/4
          </div>
          <div
            style={
              state.width === "33.33%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "33.33%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "33.33%" }));
            }}
          >
            1/3
          </div>
          <div
            style={
              state.width === "50%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "50%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "50%" }));
            }}
          >
            1/2
          </div>
          <div
            style={
              state.width === "66.66%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "66.66%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "66.66%" }));
            }}
          >
            2/3
          </div>
          <div
            style={
              state.width === "75%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "75%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "75%" }));
            }}
          >
            3/4
          </div>
          <div
            style={
              state.width === "100%"
                ? { ...customButtonStyle, ...customButtonStyleSelected }
                : { ...customButtonStyle }
            }
            onClick={() => {
              //   setState((prevState: TLayoutControlsState) => ({
              //     ...prevState,
              //     width: "100%",
              //   }));
              onChangeStyle &&
                onChangeStyle(JSON.stringify({ ...state, width: "100%" }));
            }}
          >
            1
          </div>
        </div>
      </div>
      {showTextAlignmentData && (
        <>
          <div style={{ margin: "0 5px", padding: "0px 0" }}>
            <div style={{ display: "flex", padding: "0" }}>
              <div
                style={{
                  padding: "2px 0 0 0",
                  cursor: "pointer",
                }}
                onClick={() => {
                  //   setState((prevState: TLayoutControlsState) => ({
                  //     ...prevState,
                  //     textAlign: "left",
                  //   }));
                  onChangeStyle &&
                    onChangeStyle(
                      JSON.stringify({ ...state, textAlign: "left" })
                    );
                }}
              >
                <FormatAlignLeftIcon
                  style={{
                    fontSize: "1.2em",
                    margin: "1px 0 0 0",
                    backgroundColor:
                      state.textAlign === "left" ? "grey" : "white",
                    color: state.textAlign === "left" ? "white" : "grey",
                  }}
                />
              </div>
              <div
                style={{ padding: "2px 0", cursor: "pointer" }}
                onClick={() => {
                  //   setState((prevState: TLayoutControlsState) => ({
                  //     ...prevState,
                  //     textAlign: "center",
                  //   }));
                  onChangeStyle &&
                    onChangeStyle(
                      JSON.stringify({ ...state, textAlign: "center" })
                    );
                }}
              >
                <FormatAlignCenterIcon
                  style={{
                    fontSize: "1.2em",
                    margin: "1px 0 0 0",
                    backgroundColor:
                      state.textAlign === "center" ? "grey" : "white",
                    color: state.textAlign === "center" ? "white" : "grey",
                  }}
                />
              </div>
              <div
                style={{ padding: "2px 0", cursor: "pointer" }}
                onClick={() => {
                  //   setState((prevState: TLayoutControlsState) => ({
                  //     ...prevState,
                  //     textAlign: "right",
                  //   }));
                  onChangeStyle &&
                    onChangeStyle(
                      JSON.stringify({ ...state, textAlign: "right" })
                    );
                }}
              >
                <FormatAlignRightIcon
                  style={{
                    fontSize: "1.2em",
                    margin: "1px 0 0 0",
                    backgroundColor:
                      state.textAlign === "right" ? "grey" : "white",
                    color: state.textAlign === "right" ? "white" : "grey",
                  }}
                />
              </div>
              <div
                style={{ padding: "2px 0", cursor: "pointer" }}
                onClick={() => {
                  //   setState((prevState: TLayoutControlsState) => ({
                  //     ...prevState,
                  //     textAlign: "justify",
                  //   }));
                  onChangeStyle &&
                    onChangeStyle(
                      JSON.stringify({ ...state, textAlign: "justify" })
                    );
                }}
              >
                <FormatAlignJustifyIcon
                  style={{
                    fontSize: "1.2em",
                    margin: "1px 0 0 0",
                    backgroundColor:
                      state.textAlign === "justify" ? "grey" : "white",
                    color: state.textAlign === "justify" ? "white" : "grey",
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div style={{ margin: "0 5px", padding: "0px 0" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  padding: "2px 0",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
                onClick={() => onAddHtmlTag && onAddHtmlTag("<b></b>")}
              >
                <b>B</b>
              </div>
              <div
                style={{
                  padding: "2px 0",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
                onClick={() => onAddHtmlTag && onAddHtmlTag("<u></u>")}
              >
                <u>U</u>
              </div>
              <div
                style={{
                  padding: "2px 0",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
                onClick={() => onAddHtmlTag && onAddHtmlTag("<em></em>")}
              >
                <em>I</em>
              </div>
              <div
                style={{
                  padding: "2px 0",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
                onClick={() => onAddHtmlTag && onAddHtmlTag(`<a href=""/>`)}
              >
                <InsertLinkIcon style={{ fontSize: "1em" }} />
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}
