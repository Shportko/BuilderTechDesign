import Axios, { AxiosHeaders, AxiosPromise } from "axios";

export type TApiCallArguments = {
  method: "POST" | "PATCH" | "PUT" | "GET" | "DELETE";
  url: string;
  headers?: any;
  data?: unknown;
};

export type TUseAPICallResponse = {
  makeAPICall: (arg: TApiCallArguments) => AxiosPromise<any>;
};

export const API = (): TUseAPICallResponse => {
  const makeAPICall = ({ method, url, headers, data }: TApiCallArguments) => {
    return Axios({
      method,
      url,
      headers,
      data,
    });
  };

  return { makeAPICall };
};
