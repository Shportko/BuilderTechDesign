import {
  ADD_TOAST,
  REMOVE_TOAST,
  ToastActionTypes,
  TToastReducerState,
} from "./types";

export const reducerKey = "toast";

const initialState: TToastReducerState = {
  toast: undefined,
};

export function ToastReducer(
  state = initialState,
  action: ToastActionTypes
): TToastReducerState {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toast: action.payload,
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toast: action.payload,
      };
    default:
      return state;
  }
}
