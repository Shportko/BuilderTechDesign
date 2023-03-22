import { deleteContentItems } from "@/API/contentItemAPI";
import { Dialog } from "@/components/Dialog";
import { addToast } from "@/store/toast/actions";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/DeleteItemDialog.module.css";

export type TDeleteContentItemDialog = {
  selfClose: (dialogKey: string) => void;
  dialogKey: string;
  props?: any;
};

export const deleteContentItemDialogKey = "deleteContentItemDialog";

export default function DeleteContentItemDialog({
  selfClose,
  dialogKey,
  props,
}: TDeleteContentItemDialog) {
  const [showErrorTag, setShowErrorTag] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    props?.ids &&
      props?.ids.length > 0 &&
      deleteContentItems(props.ids)
        .then(() => {
          props?.getData && props.getData();
          dispatch(addToast({ message: "Deleted", statusCode: "400" }));
          selfClose(dialogKey);
        })
        .catch(() => setShowErrorTag(true));
  }, [props?.ids]);

  return (
    <Dialog
      title={`Delete Content Item${props?.ids?.length > 1 ? "s" : ""}`}
      className={styles.DeleteContentItemDialog}
      onClickMainAction={handleDelete}
      selfClose={selfClose}
      dialogKey={dialogKey}
      type="delete"
    >
      <p>
        {`Are you sure you want to delete ${
          props?.ids?.length > 1
            ? "selected content items"
            : "this content item"
        }? This cannot be undone`}
      </p>
      {showErrorTag && (
        <div className={styles.AddContentItemDialogErrorTag}>Error</div>
      )}
    </Dialog>
  );
}
