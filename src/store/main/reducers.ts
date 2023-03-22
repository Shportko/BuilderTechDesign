import {
  GET_SCREEN_WIDTH,
  MainActionTypes,
  IMainReducerState,
  TO_SHOW_LOADER,
  GET_Y_OFFSET,
} from "./types";

export const reducerKey = "main";

const initialState: IMainReducerState = {
  screenWidth: 0,
  toShrinkHeader: false,
  showLoader: false,
  Yoffset: 0,
};

export function MainReducer(
  state = initialState,
  action: MainActionTypes
): IMainReducerState {
  switch (action.type) {
    case GET_SCREEN_WIDTH:
      return {
        ...state,
        screenWidth: action.payload,
      };
    case GET_Y_OFFSET:
      return {
        ...state,
        Yoffset: action.payload,
      };
    case TO_SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };

    default:
      return state;
  }
}
