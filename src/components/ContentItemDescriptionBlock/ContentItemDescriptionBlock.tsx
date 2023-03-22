import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import CustomButton from "../CustomButton/CustomButton";
import { CustomTextInput } from "../CustomTextInput";
import { TWithLabelUnderLabelProps, WithLabel } from "../WithLabel";
import styles from "./styles/ContentItemDescriptionBlock.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LabelIcon from "@mui/icons-material/Label";
import LayoutControls from "../LayoutControls/LayoutControls";

type TDescriptionItem = { id: string; orderNo: number; item: string };

export default function ContentItemDescriptionBlock({
  data,
  setData,
  error,
  allowOneParagraphOnly,
  showTopControls = true,
  underLabelNode,
  onDelete,
  isListOfPoints = false,
  setTag,
  setStyle,
  styleData,
  showLayoutControls = true,
}: {
  data: string[];
  setData: (data: string[]) => void;
  error?: string | boolean | undefined;
  allowOneParagraphOnly?: boolean;
  showTopControls?: boolean;
  underLabelNode?: React.ReactNode;
  onDelete?: () => void;
  isListOfPoints?: boolean;
  setTag?: (data: string) => void;
  setStyle?: (style: string) => void;
  styleData?: string;
  showLayoutControls?: boolean;
}) {
  const items = useMemo(() => {
    if (data && data.length > 0) {
      return data
        .map((el: string, i: number) => {
          return {
            id: v4(),
            orderNo: i,
            item: el,
          };
        })
        .sort(
          (a: TDescriptionItem, b: TDescriptionItem) => a.orderNo - b.orderNo
        );
    } else {
      return [
        {
          id: v4(),
          orderNo: 0,
          item: "",
        },
      ];
    }
  }, [data]);

  const handleChange = useCallback(
    (item: TDescriptionItem) => {
      const filteredElements = items.filter(
        (el: TDescriptionItem) => el.id !== item.id
      );

      const sortedItems = [...filteredElements, item]
        .sort(
          (a: TDescriptionItem, b: TDescriptionItem) => a.orderNo - b.orderNo
        )
        .map((el: TDescriptionItem) => el.item);
      setData(sortedItems);
    },
    [items]
  );

  const handleAddItem = useCallback(() => {
    const item: TDescriptionItem = {
      id: v4(),
      item: "",
      orderNo: items.length,
    };
    const sortedItems = [...items, item]
      .sort((a: TDescriptionItem, b: TDescriptionItem) => a.orderNo - b.orderNo)
      .map((el: TDescriptionItem) => el.item);
    setData(sortedItems);
  }, [items]);

  const handleRemoveItem = useCallback(
    (item: TDescriptionItem) => {
      const filteredElements = items.filter(
        (el: TDescriptionItem) => el.id !== item.id
      );
      const sortedItems = filteredElements
        .sort(
          (a: TDescriptionItem, b: TDescriptionItem) => a.orderNo - b.orderNo
        )
        .map((el: TDescriptionItem) => el.item);
      setData(sortedItems);
    },
    [items]
  );

  const sortedItems = useMemo(() => {
    return items.sort(
      (a: TDescriptionItem, b: TDescriptionItem) => a.orderNo - b.orderNo
    );
  }, [items]);

  let styleClass = `${styles.ContentItemDescriptionBlockItemsContainer}`;
  if (error) {
    styleClass = `${styles.ContentItemDescriptionBlockItemsContainer} ${styles.ContentItemDescriptionBlockItemsContainerError}`;
  }
  let underLabelprops: TWithLabelUnderLabelProps = {
    label: "",
    type: "default",
  };

  if (error) {
    underLabelprops = {
      label: typeof error === "string" ? error : "Error",
      type: "error",
    };
  }

  return (
    <WithLabel
      label={isListOfPoints ? "List" : "Description"}
      offsetFromRow
      underLabelProps={underLabelprops}
      leftTopNode={
        showLayoutControls && (
          <LayoutControls
            onAddHtmlTag={setTag}
            onChangeStyle={setStyle}
            styleData={styleData}
          />
        )
      }
      rightTopNode={
        <>
          {showTopControls && (
            <div className={styles.ContentItemDescriptionBlockTopControls}>
              {!allowOneParagraphOnly && (
                <div>
                  <AddCircleOutlineIcon
                    className={styles.ContentItemDescriptionBlockAddIconButton}
                    onClick={handleAddItem}
                  />
                </div>
              )}
              <div>
                <DeleteIcon
                  className={styles.ContentItemDescriptionBlockDeleteIconButton}
                  onClick={onDelete}
                />
              </div>
            </div>
          )}
        </>
      }
    >
      {underLabelNode ? <>{underLabelNode}</> : <></>}

      <div className={styleClass}>
        {sortedItems && sortedItems.length > 0 && (
          <>
            {sortedItems.map((el: TDescriptionItem, i: number) => {
              return (
                <div className={styles.ContentItemDescriptionBlockItem} key={i}>
                  {isListOfPoints && (
                    <div style={{ padding: "5px 10px 0 0" }}>
                      <LabelIcon style={{ color: "grey" }} />
                    </div>
                  )}
                  <CustomTextInput
                    inputValue={el.item}
                    onChange={(v: string) => {
                      const newItem = {
                        ...el,
                        item: v,
                      };
                      handleChange(newItem);
                    }}
                    placeholder="Type some text here"
                    multiline
                    multilineModeProps={{
                      rows: Math.floor(el.item.length / 120) + 1,
                    }}
                  />
                  {i > 0 && (
                    <div style={{ margin: "5px 10px" }}>
                      <CustomButton
                        type="delete-stroke"
                        size="small"
                        onClick={() => handleRemoveItem(el)}
                      >
                        Delete
                      </CustomButton>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </WithLabel>
  );
}
