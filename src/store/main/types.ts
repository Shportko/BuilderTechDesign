export interface IMainReducerState {
  screenWidth: number;
  toShrinkHeader: boolean;
  showLoader: boolean;
  Yoffset: number;
}

// -- Actions Types -- //
export const GET_SCREEN_WIDTH = "GET_SCREEN_WIDTH";
export const TO_SHOW_LOADER = "TO_SHOW_LOADER";
export const GET_Y_OFFSET = "GET_Y_OFFSET";

// -- Actions Interfaces -- //
export interface GetScreenWidthAction {
  type: typeof GET_SCREEN_WIDTH;
  payload: number;
}

export interface GetYoffsetAction {
  type: typeof GET_Y_OFFSET;
  payload: number;
}

export interface ToShowLoaderAction {
  type: typeof TO_SHOW_LOADER;
  payload: boolean;
}

export type MainActionTypes =
  | GetScreenWidthAction
  | ToShowLoaderAction
  | GetYoffsetAction;
