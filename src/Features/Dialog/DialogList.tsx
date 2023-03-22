import AddContentItemDialog, {
  addContentItemDialogKey,
} from "@/components/dialogs/AddContentItemDialog/AddContentItemDialog";
import DeleteContentItemDialog, {
  deleteContentItemDialogKey,
} from "@/components/dialogs/DeleteItemDialog/DeleteItemDialog";
import PagePreviewDialog, {
  pagePreviewDialogKey,
} from "@/components/dialogs/PagePreviewDialog/PagePreviewDialog";
import { closeDialog } from "@/store/dialog/actions";
import { TDialogProp } from "@/store/dialog/types";
import { mainSelector } from "@/store/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export type TDialogList = unknown;

export const dialogMap = {
  [addContentItemDialogKey as string]: AddContentItemDialog,
  [deleteContentItemDialogKey as string]: DeleteContentItemDialog,
  [pagePreviewDialogKey as string]: PagePreviewDialog,
};

export const DialogList: React.FC<TDialogList> = () => {
  const mainProps = useSelector(mainSelector);
  const { dialogs } = mainProps.DialogReducer;
  const dispatch = useDispatch();
  return (
    <>
      {dialogs.map((el: TDialogProp, index: number) => {
        const Component: any = dialogMap[el.dialogKey];
        const selfClose = (dialogKey: string) =>
          dispatch(closeDialog(dialogKey));
        return (
          <Component
            key={index}
            selfClose={selfClose}
            dialogKey={el.dialogKey}
            props={el.props}
          />
        );
      })}
    </>
  );
};
