import actionTypes from "helpers/actionTypes";

export default {
  LOGIN: actionTypes("LOGIN"),
  LOGOUT: "LOGOUT",
  RESET: "RESET",
  RESET_REQUEST: actionTypes("RESET_REQUEST"),
  RESET_PASSWORD: actionTypes("RESET_PASSWORD"),
  VERIFY_EMAIL: actionTypes("VERIFY_EMAIL"),
  SIGN_UP: actionTypes("SIGN_UP"),
  REQUEST_MAIL: actionTypes("REQUEST_MAIL"),
};
