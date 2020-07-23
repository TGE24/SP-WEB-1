import api from "../../helpers/request";
import authActionTypes from "./type";

export const login = (data) => async (dispatch) => {
  const payload = api.post("/user/login", data);
  return dispatch({ type: authActionTypes.LOGIN.default, payload });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.LOGOUT });
};
