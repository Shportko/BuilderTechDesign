import { deleteContentItem, updateContentItem } from "@/API/contentItemAPI";
import { CustomTextInput } from "@/components/CustomTextInput";
import { TContentItem } from "@/types/main";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles/ContentSubitem.module.css";
import MultiImagesComponent from "../MultiImagesComponent/MultiImagesComponent";
import ContentItemDescriptionBlock from "../ContentItemDescriptionBlock/ContentItemDescriptionBlock";
import { useDispatch } from "react-redux";
import { addToast } from "@/store/toast/actions";
import { WithLabel } from "../WithLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import LayoutControls from "../LayoutControls/LayoutControls";

export type TContentSubitemState = {
  item: TContentItem;
  isFormDirty: boolean;
};

export default function ContentSubitem({
  subitem,
  getContentItemDetails,
}: {
  subitem: TContentItem;
  getContentItemDetails: () => void;
}) {
  const dispatch = useDispatch();
  const saveTimer: any = useRef(null);

  const [state, setState] = useState<TContentSubitemState>({
    item: {
      ...subitem,
    },
    isFormDirty: false,
  });

  useEffect(() => {
    const stringSubitem = `${subitem?.anchorId}${
      subitem?.title
    }${JSON.stringify(subitem?.description)}${JSON.stringify(subitem?.style)}`;
    const stringSubitemInState = `${state.item?.anchorId}${
      state.item?.title
    }${JSON.stringify(state.item?.description)}${JSON.stringify(
      state.item?.style
    )}`;

    if (stringSubitem !== stringSubitemInState) {
      setState((prevState: TContentSubitemState) => ({
        ...prevState,
        isFormDirty: true,
      }));
    } else {
      setState((prevState: TContentSubitemState) => ({
        ...prevState,
        isFormDirty: false,
      }));
    }
  }, [subitem, state.item]);

  useEffect(() => {
    if (!state.isFormDirty) return;
    if (state?.item) {
      saveTimer?.current && clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        handleSaveItem(state.item);
      }, 2000);
    }
    return () => saveTimer?.current && clearTimeout(saveTimer.current);
  }, [state?.item, saveTimer.current, state.isFormDirty]);

  const handleSaveItem = useCallback((data: TContentItem) => {
    if (data) {
      updateContentItem(data)
        .then((result) => {
          if (result.status === 200) {
            getContentItemDetails();
            dispatch(addToast({ message: "Saved", statusCode: "200" }));
          }
        })
        .catch((error) => {
          console.error("Update Content Subitem error", error);
          dispatch(
            addToast({
              message: "Error updating subitem. Try later",
              statusCode: "400",
            })
          );
        });
    }
  }, []);

  const handleDeleteItem = useCallback(() => {
    if (subitem?._id) {
      deleteContentItem(subitem._id)
        .then((result) => {
          if (result.status === 201) {
            getContentItemDetails();
            dispatch(addToast({ message: "Deleted", statusCode: "400" }));
          }
        })
        .catch((error) => {
          console.error("Delete Content Subitem error", error);
          dispatch(
            addToast({
              message: "Error deleting subitem. Try later",
              statusCode: "400",
            })
          );
        });
    }
  }, [subitem]);

  const setDescriptionData = (data: string[]) => {
    setState((prevState: TContentSubitemState) => ({
      ...prevState,
      item: {
        ...state.item,
        description: data,
      },
    }));
  };

  const setListData = (data: string[]) => {
    setState((prevState: TContentSubitemState) => ({
      ...prevState,
      item: {
        ...state.item,
        breakdownPoints: data,
      },
    }));
  };

  const node = useMemo(() => {
    switch (state.item.subtype) {
      case "title":
        return (
          <WithLabel
            label="Title"
            offsetFromRow
            leftTopNode={
              <LayoutControls
                onChangeStyle={(data: string) => {
                  setState((prevState: TContentSubitemState) => ({
                    ...prevState,
                    item: {
                      ...state.item,
                      style: data,
                    },
                  }));
                }}
                onAddHtmlTag={(data: string) => {
                  console.log(data);
                }}
                styleData={state.item.style}
              />
            }
            rightTopNode={
              <DeleteIcon
                className={styles.ContentSubitemDeleteIconButton}
                onClick={handleDeleteItem}
              />
            }
          >
            <CustomTextInput
              placeholder="Type your text here"
              inputValue={state?.item?.title}
              onChange={(v) =>
                setState((prevState: TContentSubitemState) => ({
                  ...prevState,
                  item: {
                    ...state.item,
                    title: v,
                  },
                }))
              }
            />
          </WithLabel>
        );
      case "description":
        return (
          <ContentItemDescriptionBlock
            data={state.item.description || []}
            setData={setDescriptionData}
            onDelete={handleDeleteItem}
            setTag={(data: string) => {
              console.log(data);
            }}
            setStyle={(data: string) => {
              setState((prevState: TContentSubitemState) => ({
                ...prevState,
                item: {
                  ...state.item,
                  style: data,
                },
              }));
            }}
            styleData={state.item.style}
          />
        );
      case "images":
        return (
          <MultiImagesComponent
            item={subitem}
            onSubmit={getContentItemDetails}
            onDelete={handleDeleteItem}
            setStyle={(data: string) => {
              setState((prevState: TContentSubitemState) => ({
                ...prevState,
                item: {
                  ...state.item,
                  style: data,
                },
              }));
            }}
            styleData={state.item.style}
          />
        );
      case "list":
        return (
          <ContentItemDescriptionBlock
            data={state.item.breakdownPoints || []}
            setData={setListData}
            onDelete={handleDeleteItem}
            isListOfPoints={true}
            setTag={(data: string) => {
              console.log(data);
            }}
            setStyle={(data: string) => {
              setState((prevState: TContentSubitemState) => ({
                ...prevState,
                item: {
                  ...state.item,
                  style: data,
                },
              }));
            }}
            styleData={state.item.style}
          />
        );
      case "action":
        return (
          <WithLabel
            label="Action"
            offsetFromRow
            className={styles.ContentSubitemImages}
            rightTopNode={
              <DeleteIcon
                className={styles.ContentSubitemDeleteIconButton}
                onClick={handleDeleteItem}
              />
            }
          >
            Action
          </WithLabel>
        );
      default:
        return <div>Unknown subtype value</div>;
    }
  }, [
    state.item.subtype,
    handleDeleteItem,
    setState,
    setDescriptionData,
    setDescriptionData,
    getContentItemDetails,
    subitem,
  ]);

  return (
    <div className={styles.ContentSubitem} id={subitem?.anchorId}>
      <div className={styles.ContentSubitemRightControls}>
        <div className={styles.ContentSubitemRightControlsControls}>
          <div className={styles.ContentSubitemRightControlsControlsItem}>
            UP
          </div>
          <div>DOWN</div>
        </div>
      </div>
      <div className={styles.ContentSubitemMain}>{node}</div>
    </div>
  );
}
