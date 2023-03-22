import { TContentItemItemType } from "@/global-constants/constants";
import { backendUrl } from "@/global-constants/global-constants";
import { TContentItem, TContentItemType } from "@/types/main";
import axios from "axios";
import jwt_decode from "jwt-decode";

export function getHeaders() {
  let token;
  const headers: { [key: string]: string } = {};
  const tokenFromStorage = localStorage.getItem("nico-pro-access-token");
  if (tokenFromStorage) {
    token = `Bearer ${tokenFromStorage}`;
    headers["Authorization"] = token;
  }
  return headers;
}

export const getContentItemSlugs = (type: TContentItemItemType) => {
  return axios.get(`${backendUrl}/content/all-slugs/${type}`);
};

export const checkIfSlugUnique = (slug: string) => {
  const headers = getHeaders();
  return axios.get(`${backendUrl}/content/slug-uniquness-check/${slug}`, {
    headers,
  });
};

export const getContentItems = (type: TContentItemType) => {
  return axios.get(`${backendUrl}/content/all/${type}`);
};

export const getPublishedContentItems = (type: TContentItemType) => {
  return axios.get(`${backendUrl}/content/all-published/${type}`);
};

export const getContentItemAPI = (slug: string | string[]) => {
  return axios.get(`${backendUrl}/content/${slug}`);
};

export const createContentItem = (data: TContentItem) => {
  const headers = getHeaders();
  const body = data;
  return axios.post(`${backendUrl}/content`, body, { headers });
};

export const updateContentItem = (data: TContentItem) => {
  const headers = getHeaders();
  const body: TContentItem = {
    ...data,
    updated_at: new Date().toISOString(),
    last_published_at: data.published_at,
    published_at: "",
    status: "draft",
  };
  return axios.put(`${backendUrl}/content/${data._id}`, body, { headers });
};

export const publishContentItem = (_id: string) => {
  const headers = getHeaders();

  return axios.put(`${backendUrl}/content/publish/${_id}`, {}, { headers });
};

export const deleteContentItem = (id: string) => {
  const headers = getHeaders();
  return axios.delete(`${backendUrl}/content/${id}`, { headers });
};

export const deleteContentItems = (ids: string[]) => {
  const headers = getHeaders();
  const data = {
    ids,
  };
  return axios.post(`${backendUrl}/content/selected`, data, { headers });
};

export const uploadItemImageToStorage = (
  image: string | Blob,
  contentItemId: string,
  alt: string,
  orderNo: number
) => {
  const authHeaders = getHeaders();
  const body = new FormData();
  body.append("image", image);
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      ...authHeaders,
    },
  };
  return axios.post(
    `${backendUrl}/media/item/${contentItemId}/${alt}/${orderNo}`,
    body,
    config
  );
};

export const uploadMainImageToStorage = (
  image: string | Blob,
  contentItemId: string,
  alt: string,
  oldImageKey: string
) => {
  const authHeaders = getHeaders();
  const body = new FormData();
  body.append("image", image);
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      ...authHeaders,
    },
  };
  return axios.put(
    `${backendUrl}/media/main/${contentItemId}/${
      alt ? alt : "test-alt"
    }/${oldImageKey}`,
    body,
    config
  );
};

export const deleteImageFromStorage = ({
  imageKey,
  imageId,
}: {
  imageKey: string;
  imageId: string;
}) => {
  return axios.delete(`${backendUrl}/media/${imageId}/${imageKey}`, {
    headers: getHeaders(),
  });
};

export const updateImageAltOnServer = ({
  imageAlt,
  imageId,
}: {
  imageAlt: string;
  imageId: string;
}) => {
  return axios.put(`${backendUrl}/media/${imageId}/${imageAlt}`, {
    headers: getHeaders(),
  });
};

export const userLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = {
    email,
    password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${backendUrl}/user/login`, data)
      .then((result) => {
        const token = result.data?.authToken;
        const decoded =
          token && token.length > 0
            ? (jwt_decode(token) as {
                user_id: string;
                user_role: string;
                user_name: string;
                user_email: string;
              })
            : undefined;
        if (decoded) {
          localStorage.setItem("nico-pro-access-token", token);
          localStorage.setItem("nico-pro-logged-user-name", decoded.user_name);
          localStorage.setItem(
            "nico-pro-logged-user-email",
            decoded.user_email
          );
          localStorage.setItem("nico-pro-logged-user-role", decoded.user_role);
          localStorage.setItem("nico-pro-logged-user-id", decoded.user_id);
        }
        if (decoded) {
          resolve("Logged successfully");
        } else {
          reject("Auth failed");
        }
      })
      .catch((error) => console.error("Cannot login", error));
  });
};

export const userLogout = () => {
  return new Promise((resolve, reject) => {
    localStorage.setItem("nico-pro-access-token", "");
    localStorage.setItem("nico-pro-logged-user-name", "");
    localStorage.setItem("nico-pro-logged-user-email", "");
    localStorage.setItem("nico-pro-logged-user-role", "");
    localStorage.setItem("nico-pro-logged-user-id", "");

    resolve("Logged out");
  });
};
