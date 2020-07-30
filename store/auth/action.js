import api from "../../helpers/request";
import authActionTypes from "./type";
import { store } from "../../store";
import axios from "axios";

export const login = (data) => async (dispatch) => {
  const payload = api.post("/user/login", data);
  return dispatch({ type: authActionTypes.LOGIN.default, payload });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.LOGOUT });
};

export const verify = (email, token) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {
    auth: { data },
  } = store.getState();
  let payload;
  data?.token
    ? (payload = api.post("/verify_account", email))
    : (payload = axios.post(
        "https://api.spreadprolimited.com/api/verify_account",
        email,
        config
      ));
  return dispatch({
    type: authActionTypes.VERIFY_EMAIL.default,
    payload,
  });
};

export const signup = (data) => async (dispatch) => {
  const payload = api.post("/user", data);
  return dispatch({
    type: authActionTypes.SIGN_UP.default,
    payload,
  });
};
export const googleAuth = () => async (dispatch) => {
  const payload = api.get("/login/google");
  return dispatch({ type: authActionTypes.GOOGLE_SIGNUP.default, payload });
};
export const twitterAuth = () => async (dispatch) => {
  const payload = api.get("/login/twitter");
  return dispatch({ type: authActionTypes.TWITTER_SIGNUP.default, payload });
};
export const facebookAuth = () => async (dispatch) => {
  const payload = api.get("/login/facebook");
  return dispatch({ type: authActionTypes.FACEBOOK_SIGNUP.default, payload });
};
