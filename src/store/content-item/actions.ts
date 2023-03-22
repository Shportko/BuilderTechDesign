import { API } from "@/API/api";
import { backendUrl } from "@/global-constants/global-constants";
import { TContentItemType } from "@/global-constants/constants";
import { TContentItem } from "@/types/main";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
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
  UPDATE_CONTENT_ITEM_FAILURE,
  UPDATE_CONTENT_ITEM_REQUEST,
  UPDATE_CONTENT_ITEM_SUCCESS,
} from "./types";
import { addToast } from "../toast/actions";

function getHeaders() {
  let token;
  const headers: { [key: string]: string } = {};
  const tokenFromStorage = localStorage.getItem("nico-pro-access-token");
  if (tokenFromStorage) {
    token = `Bearer ${tokenFromStorage}`;
    headers["Authorization"] = token;
  }
  return headers;
}

export const getPageDetails = ({ type }: { type: TContentItemType }): any => {
  const { makeAPICall } = API();
  const url = `${backendUrl}/content/all/${type}`;
  const method = "GET";
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    dispatch({ type: GET_PAGE_DETAILS_REQUEST });
    makeAPICall({ method, url })
      .then((res: any) => {
        if (res?.data?.contentItems) {
          const pageDetails = res?.data?.contentItems;
          dispatch({
            type: GET_PAGE_DETAILS_SUCCESS,
            payload: pageDetails,
          });
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Cannot get page details";
        }
        dispatch({
          type: GET_PAGE_DETAILS_FAILURE,
          payload: message,
        });
      });
  };
};

export const getArticles = ({ type }: { type: TContentItemType }): any => {
  const { makeAPICall } = API();
  const url = `${backendUrl}/content/all/${type}`;
  const method = "GET";
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    dispatch({ type: GET_ARTICLES_REQUEST });
    makeAPICall({ method, url })
      .then((res: any) => {
        if (res?.data?.contentItems) {
          const articles = res?.data?.contentItems;
          dispatch({
            type: GET_ARTICLES_SUCCESS,
            payload: articles,
          });
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Cannot get articles";
        }
        dispatch({
          type: GET_ARTICLES_FAILURE,
          payload: message,
        });
      });
  };
};

export const getContentItem = ({ slug }: { slug: string }): any => {
  const { makeAPICall } = API();
  const url = `${backendUrl}/content/${slug}`;
  const method = "GET";
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    dispatch({ type: GET_CONTENT_ITEM_REQUEST });
    makeAPICall({ method, url })
      .then((res: any) => {
        if (res?.data?.contentItem) {
          const contentItem = res?.data?.contentItem;
          dispatch({
            type: GET_CONTENT_ITEM_SUCCESS,
            payload: contentItem,
          });
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Cannot get content content item";
        }
        dispatch({
          type: GET_CONTENT_ITEM_FAILURE,
          payload: message,
        });
      });
  };
};

export const createContentItem = ({ data }: { data: TContentItem }): any => {
  const { makeAPICall } = API();

  const url = `${backendUrl}/content`;
  const method = "POST";
  const headers = getHeaders();
  const body: TContentItem = {
    ...data,
  };
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    dispatch({ type: CREATE_CONTENT_ITEM_REQUEST });
    makeAPICall({ method, url, headers, data: body })
      .then((res: any) => {
        if (res?.data?.result) {
          dispatch({
            type: CREATE_CONTENT_ITEM_SUCCESS,
          });
          data?.type && dispatch(getArticles({ type: data.type }));
          dispatch(addToast({ message: "Created", statusCode: "200" }));
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Error creating content item";
        }
        dispatch({
          type: CREATE_CONTENT_ITEM_FAILURE,
          payload: message,
        });
        dispatch(
          addToast({
            message,
            statusCode: "500",
          })
        );
      });
  };
};

export const updateContentItem = ({ data }: { data: TContentItem }): any => {
  const { makeAPICall } = API();
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    const url = `${backendUrl}/content/${data._id}`;
    const method = "PUT";
    const headers = getHeaders();
    const body: TContentItem = {
      ...data,
      updated_at: new Date().toISOString(),
    };
    dispatch({ type: UPDATE_CONTENT_ITEM_REQUEST });
    makeAPICall({ method, url, headers, data: body })
      .then((res: any) => {
        if (res?.data?.result) {
          dispatch({
            type: UPDATE_CONTENT_ITEM_SUCCESS,
          });
          dispatch(addToast({ message: "Updated", statusCode: "500" }));
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Error updating content item";
        }
        dispatch({
          type: UPDATE_CONTENT_ITEM_FAILURE,
          payload: message,
        });
        dispatch(
          addToast({
            message,
            statusCode: "500",
          })
        );
      });
  };
};

export const deleteContentItem = ({
  id,
  type,
}: {
  id: string;
  type?: TContentItemType;
}): any => {
  const { makeAPICall } = API();
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    const url = `${backendUrl}/content/${id}`;
    const method = "DELETE";
    const headers = getHeaders();
    dispatch({ type: DELETE_CONTENT_ITEM_REQUEST });
    makeAPICall({ method, url, headers })
      .then((res: any) => {
        if (res?.data?.result) {
          dispatch({
            type: DELETE_CONTENT_ITEM_SUCCESS,
          });
          type && dispatch(getArticles({ type }));
          dispatch(addToast({ message: "Deleted", statusCode: "500" }));
        }
      })
      .catch((err) => {
        console.error(err?.message, "error");
        let message = "";
        if (err.response) {
          message = err.response.data?.message;
        } else {
          message = "Error deleting content item";
        }
        dispatch({
          type: DELETE_CONTENT_ITEM_FAILURE,
          payload: message,
        });
        dispatch(
          addToast({
            message,
            statusCode: "500",
          })
        );
      });
  };
};
