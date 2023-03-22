import { TContentItem } from "@/types/main";

export type TContentItemReducerState = {
  articles: TContentItem[] | undefined;
  pageDetails: TContentItem[] | undefined;
  contentItem: TContentItem | undefined;
  loading: boolean;
  error: string | undefined;
};

export const GET_PAGE_DETAILS_REQUEST = "GET_PAGE_DETAILS_REQUEST";
export const GET_PAGE_DETAILS_SUCCESS = "GET_PAGE_DETAILS_SUCCESS";
export const GET_PAGE_DETAILS_FAILURE = "GET_PAGE_DETAILS_FAILURE";

export const GET_ARTICLES_REQUEST = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "GET_ARTICLES_FAILURE";

export const GET_CONTENT_ITEM_REQUEST = "GET_CONTENT_ITEM_REQUEST";
export const GET_CONTENT_ITEM_SUCCESS = "GET_CONTENT_ITEM_SUCCESS";
export const GET_CONTENT_ITEM_FAILURE = "GET_CONTENT_ITEM_FAILURE";

export const CREATE_CONTENT_ITEM_REQUEST = "CREATE_CONTENT_ITEM_REQUEST";
export const CREATE_CONTENT_ITEM_SUCCESS = "CREATE_CONTENT_ITEM_SUCCESS";
export const CREATE_CONTENT_ITEM_FAILURE = "CREATE_CONTENT_ITEM_FAILURE";

export const UPDATE_CONTENT_ITEM_REQUEST = "UPDATE_CONTENT_ITEM_REQUEST";
export const UPDATE_CONTENT_ITEM_SUCCESS = "UPDATE_CONTENT_ITEM_SUCCESS";
export const UPDATE_CONTENT_ITEM_FAILURE = "UPDATE_CONTENT_ITEM_FAILURE";

export const DELETE_CONTENT_ITEM_REQUEST = "DELETE_CONTENT_ITEM_REQUEST";
export const DELETE_CONTENT_ITEM_SUCCESS = "DELETE_CONTENT_ITEM_SUCCESS";
export const DELETE_CONTENT_ITEM_FAILURE = "DELETE_CONTENT_ITEM_FAILURE";

export type TGetPageDetailsActionRequest = {
  type: string;
};
export type TGetPageDetailsActionSuccess = {
  type: string;
  payload: TContentItem[];
};
export type TGetPageDetailsActionFailure = {
  type: string;
  payload: string;
};

export type TGetArticlesActionRequest = {
  type: string;
};
export type TGetArticlesActionSuccess = {
  type: string;
  payload: TContentItem[];
};
export type TGetArticlesActionFailure = {
  type: string;
  payload: string;
};

export type TGetContentItemActionRequest = {
  type: string;
};
export type TGetContentItemActionSuccess = {
  type: string;
  payload: TContentItem;
};
export type TGetContentItemActionFailure = {
  type: string;
  payload: string;
};

export type TCreateContentItemActionRequest = {
  type: string;
};
export type TCreateContentItemActionSuccess = {
  type: string;
};
export type TCreateContentItemActionFailure = {
  type: string;
  payload: string;
};

export type TUpdateContentItemActionRequest = {
  type: string;
};
export type TUpdateContentItemActionSuccess = {
  type: string;
};
export type TUpdateContentItemActionFailure = {
  type: string;
  payload: string;
};

export type TDeleteContentItemActionRequest = {
  type: string;
};
export type TDeleteContentItemActionSuccess = {
  type: string;
};
export type TDeleteContentItemActionFailure = {
  type: string;
  payload: string;
};

export type TContentItemActionTypes = TGetPageDetailsActionRequest &
  TGetPageDetailsActionSuccess &
  TGetPageDetailsActionFailure &
  TGetArticlesActionRequest &
  TGetArticlesActionSuccess &
  TGetArticlesActionFailure &
  TGetContentItemActionRequest &
  TGetContentItemActionSuccess &
  TGetContentItemActionFailure &
  TCreateContentItemActionRequest &
  TCreateContentItemActionSuccess &
  TCreateContentItemActionFailure &
  TUpdateContentItemActionRequest &
  TUpdateContentItemActionSuccess &
  TUpdateContentItemActionFailure &
  TDeleteContentItemActionRequest &
  TDeleteContentItemActionSuccess &
  TDeleteContentItemActionFailure;
