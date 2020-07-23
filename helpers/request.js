import axios from "axios";
import { store } from "../store";
// import { logout } from "store/auth/actions";
// import authActionTypes from "store/auth/actionTypes";

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

export default request;
