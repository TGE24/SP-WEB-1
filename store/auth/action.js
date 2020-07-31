import api from "../../helpers/request";
import authActionTypes from "./type";

export const login = (data) => async (dispatch) => {
  const payload = api.post("/user/login", data);
  return dispatch({ type: authActionTypes.LOGIN.default, payload });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.LOGOUT });
};

export const verify = (email, token) => async (dispatch) => {
  const payload = api.get("/token/" + token + "/verify", email);
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
