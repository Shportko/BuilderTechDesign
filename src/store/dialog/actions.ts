import {
  CLOSE_DIALOG,
  ICloseDialogAction,
  IOpenDialogAction,
  OPEN_DIALOG,
} from "./types";

export function openDialog(dialogKey: string, props?: any): IOpenDialogAction {
  return {
    type: OPEN_DIALOG,
    payload: {
      dialogKey,
      props,
    },
  };
}

export function closeDialog(
  dialogKey: string,
  props?: any
): ICloseDialogAction {
  return {
    type: CLOSE_DIALOG,
    payload: {
      dialogKey,
      props,
    },
  };
}
