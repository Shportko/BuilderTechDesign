import {
  IDialogReducerState,
  TDialogActionTypes,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  TDialogProp,
} from "./types";

const initialState: IDialogReducerState = {
  dialogs: [],
};

export function DialogReducer(
  state = initialState,
  action: TDialogActionTypes
) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs, action.payload],
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.filter(
          (el: TDialogProp) => el.dialogKey !== action.payload.dialogKey
        ),
      };
    default:
      return state;
  }
}
