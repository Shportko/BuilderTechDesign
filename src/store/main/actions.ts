import {
  GetScreenWidthAction,
  GetYoffsetAction,
  GET_SCREEN_WIDTH,
  GET_Y_OFFSET,
  ToShowLoaderAction,
  TO_SHOW_LOADER,
} from "./types";

export function getScreenWidth(screenWidth: number): GetScreenWidthAction {
  return {
    type: GET_SCREEN_WIDTH,
    payload: screenWidth,
  };
}

export function getYoffset(Yoffset: number): GetYoffsetAction {
  return {
    type: GET_Y_OFFSET,
    payload: Yoffset,
  };
}

export function toShowLoader(showLoader: boolean): ToShowLoaderAction {
  return {
    type: TO_SHOW_LOADER,
    payload: showLoader,
  };
}
