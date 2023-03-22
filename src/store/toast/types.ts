// -- Created by Oleksandr Sulakov, California Web Dewelopment, Apr 22 2021. -- //

export type TToast = {
  message: string;
  statusCode: string;
};

export type TToastReducerState = {
  toast: TToast | undefined;
};

export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export type TAddToastAction = {
  type: string;
  payload: TToast | undefined;
};

export type TRemoveToastAction = {
  type: string;
  payload: undefined;
};

export type ToastActionTypes = TAddToastAction | TRemoveToastAction;
