import { CustomTextInput } from "@/components/CustomTextInput";
import { Dialog } from "@/components/Dialog";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  PagesToContentItemsMap,
  TPagesTypes,
} from "../../../global-constants/constants";
import styles from "./styles/AddItemDialog.module.css";
import { TContentItem, TContentItemType } from "@/types/main";
import { useDispatch } from "react-redux";
import { checkIfSlugUnique, createContentItem } from "@/API/contentItemAPI";
import { addToast } from "@/store/toast/actions";

export type TAddContentItemDialog = {
  selfClose: (dialogKey: string) => void;
  dialogKey: string;
  props?: any;
};

type TAddContentItemDialogState = {
  title?: string;
  titleError?: string;
  type?: TContentItemType;
  typeError?: string;
  slug?: string;
  slugError?: string;
};

export const addContentItemDialogKey = "addContentItemDialog";

export default function AddContentItemDialog({
  selfClose,
  dialogKey,
  props,
}: TAddContentItemDialog) {
  const dispatch = useDispatch();
  const [state, setState] = useState<TAddContentItemDialogState>({});
  const [showErrorTag, setShowErrorTag] = useState<boolean>(false);

  const contentType = useMemo(() => {
    const type = props?.type as TPagesTypes;
    return PagesToContentItemsMap[type];
  }, [props?.type]);

  useEffect(() => {
    setState((prevState: TAddContentItemDialogState) => ({
      ...prevState,
      type: contentType,
    }));
  }, [contentType]);

  const handleSave = useCallback(() => {
    let titleError: string | undefined = undefined;
    if (state?.title === undefined || state?.title === "") {
      titleError = "Title must not be empty";
    }
    let typeError: string | undefined = undefined;
    if (state?.type === undefined || state?.type === null) {
      typeError = "Type must me selected";
    }
    let slugError: string | undefined = "";
    if (state?.slug === undefined || state?.slug === "") {
      slugError = "Slug must not be empty";
    }
    if (titleError || typeError || slugError) {
      setState((prevState: TAddContentItemDialogState) => ({
        ...prevState,
        titleError,
        typeError,
        slugError,
      }));
    } else {
      if (state?.type && state?.slug) {
        const data = {
          title: state?.title || "",
          type: state.type as TContentItemType,
          slug: state.slug,
          status: "draft",
          authorName: localStorage.getItem("nico-pro-logged-user-name"),
          authorEmail: localStorage.getItem("nico-pro-logged-user-email"),
          orderNo: props?.existingItemsCount,
        } as TContentItem;

        data.slug &&
          checkIfSlugUnique(data.slug)
            .then((result) => {
              if (result?.status === 200) {
                createContentItem(data)
                  .then(() => {
                    dispatch(
                      addToast({ message: "Created", statusCode: "200" })
                    );
                    props.onSubmitCreateNewContentItem();
                    selfClose(dialogKey);
                  })
                  .catch(() => {
                    dispatch(
                      addToast({
                        message: "Error creating content item",
                        statusCode: "500",
                      })
                    );
                  });
                selfClose(dialogKey);
              }
            })
            .catch((error) => {
              if (error?.response?.data?.errorMessage) {
                setState((prevState: TAddContentItemDialogState) => ({
                  ...prevState,
                  slugError: error?.response?.data?.errorMessage,
                }));
              } else {
                setShowErrorTag(true);
              }
            });
      }
    }
  }, [state]);

  return (
    <Dialog
      title="Create Content Item"
      className={styles.AddContentItemDialog}
      onClickMainAction={handleSave}
      selfClose={selfClose}
      dialogKey={dialogKey}
    >
      <CustomTextInput
        labelProps={{ label: "Title*" }}
        placeholder="Enter your text here"
        onChange={(v) =>
          setState((prevState: TAddContentItemDialogState) => ({
            ...prevState,
            title: v,
          }))
        }
        error={state?.titleError}
      />
      <CustomTextInput
        labelProps={{ label: "Type*" }}
        inputValue={contentType}
        error={state?.titleError}
        disabled
      />
      <CustomTextInput
        offsetFromRow
        labelProps={{ label: "Slug*" }}
        placeholder="Enter phrase separated by hyphen (my-test-slug)"
        onChange={(v) =>
          setState((prevState: TAddContentItemDialogState) => ({
            ...prevState,
            slug: v,
          }))
        }
        error={state?.slugError}
      />
      {showErrorTag && (
        <div className={styles.AddContentItemDialogErrorTag}>Error</div>
      )}
    </Dialog>
  );
}
