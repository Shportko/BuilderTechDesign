import { ADD_TOAST, REMOVE_TOAST } from "./types";

export const addToast = ({
  message,
  statusCode,
}: {
  message: string;
  statusCode: string;
}): any => {
  return async (dispatch: any): Promise<void> => {
    dispatch({
      type: ADD_TOAST,
      payload: { message, statusCode },
    });
  };
};

export const removeToast = (): any => {
  return async (dispatch: any): Promise<void> => {
    dispatch({
      type: REMOVE_TOAST,
      payload: undefined,
    });
  };
};
