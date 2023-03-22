export type TDialogProp = {
  dialogKey: string;
  props?: any;
};

export interface IDialogReducerState {
  dialogs: TDialogProp[];
}

export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export interface IOpenDialogAction {
  type: typeof OPEN_DIALOG;
  payload: TDialogProp;
}

export interface ICloseDialogAction {
  type: typeof CLOSE_DIALOG;
  payload: TDialogProp;
}

export type TDialogActionTypes = IOpenDialogAction | ICloseDialogAction;
