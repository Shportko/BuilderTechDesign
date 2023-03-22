import { backendUrl } from "@/global-constants/global-constants";
import { TCustomerReviewItem } from "@/types/main";
import axios from "axios";
import { getHeaders } from "./contentItemAPI";

export const createReview = (data: TCustomerReviewItem) => {
  const headers = {};
  const body = data;
  return axios.post(`${backendUrl}/customer-review`, body, { headers });
};

export const getCustomerReviews = () => {
  return axios.get(`${backendUrl}/customer-review`);
};

export const deleteCustomerReview = (id: string) => {
  const headers = getHeaders();
  return axios.delete(`${backendUrl}/customer-review/${id}`, { headers });
};

export const approveContentItem = (id: string) => {
  const headers = getHeaders();
  const body: TCustomerReviewItem = {
    is_approved: true,
  };
  return axios.put(`${backendUrl}/customer-review/${id}`, body, { headers });
};
