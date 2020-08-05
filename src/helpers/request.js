import axios from "axios";
import { store } from "store";
import { toastError } from "helpers/Toast";
import parseError from "helpers/ParseError";

const request = axios.create({
  baseURL: "https://api.spreadprolimited.com/api",
});

request.interceptors.request.use((config) => {
  const {
    auth: { data },
  } = store.getState();

  if (!data?.token) return config;

  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${data.token}`,
    },
  };
  return newConfig;
});

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with response error
    const errorMessage = parseError(error);
    toastError(errorMessage.error);
    return Promise.reject(error);
  }
);

export default request;
