import {
  CREATE_CONTENT_ITEM_FAILURE,
  CREATE_CONTENT_ITEM_REQUEST,
  CREATE_CONTENT_ITEM_SUCCESS,
  DELETE_CONTENT_ITEM_FAILURE,
  DELETE_CONTENT_ITEM_REQUEST,
  DELETE_CONTENT_ITEM_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_CONTENT_ITEM_FAILURE,
  GET_CONTENT_ITEM_REQUEST,
  GET_CONTENT_ITEM_SUCCESS,
  GET_PAGE_DETAILS_FAILURE,
  GET_PAGE_DETAILS_REQUEST,
  GET_PAGE_DETAILS_SUCCESS,
  TContentItemActionTypes,
  TContentItemReducerState,
  UPDATE_CONTENT_ITEM_FAILURE,
  UPDATE_CONTENT_ITEM_REQUEST,
  UPDATE_CONTENT_ITEM_SUCCESS,
} from "./types";

export const reducerKey = "content-item";

const initialState: TContentItemReducerState = {
  articles: undefined,
  pageDetails: undefined,
  contentItem: undefined,
  loading: false,
  error: undefined,
};

export function ContentItemReducer(
  state = initialState,
  action: TContentItemActionTypes
): TContentItemReducerState {
  switch (action.type) {
    case GET_PAGE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_PAGE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        pageDetails: action.payload,
      };
    case GET_PAGE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        articles: action.payload,
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CONTENT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_CONTENT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        pageDetails: action.payload,
      };
    case GET_CONTENT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_CONTENT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case CREATE_CONTENT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    case CREATE_CONTENT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_CONTENT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case UPDATE_CONTENT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    case UPDATE_CONTENT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTENT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case DELETE_CONTENT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    case DELETE_CONTENT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
