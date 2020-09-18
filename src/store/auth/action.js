import api from "helpers/request";
import authActionTypes from "./type";

export const login = (data) => async (dispatch) => {
  const payload = api.post("/user/login", data);
  return dispatch({
    type: authActionTypes.LOGIN.default,
    payload,
  });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.RESET });
};

export const verify = (token) => async (dispatch) => {
  const payload = api.get("/token/" + token + "/verify");
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

export const requestVerification = (data) => async (dispatch) => {
  const payload = api.post("/verify_account", data);
  return dispatch({
    type: authActionTypes.REQUEST_MAIL.default,
    payload,
  });
};

export const reset = (data) => async (dispatch) => {
  const payload = api.post("/forgot_password", data);
  return dispatch({ type: authActionTypes.RESET_REQUEST.default, payload });
};
export const resetPassword = ({ token, data }) => async (dispatch) => {
  const payload = api.post("/verify_password/" + token, data);
  return dispatch({ type: authActionTypes.RESET_PASSWORD.default, payload });
};
