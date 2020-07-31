import authActionTypes from "./type";
import parseError from "../../helpers/ParseError";
import Cookies from "js-cookie";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN.pending:
    case authActionTypes.VERIFY_EMAIL.pending:
    case authActionTypes.SIGN_UP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.LOGIN.fulfilled:
    case authActionTypes.VERIFY_EMAIL.fulfilled:
    case authActionTypes.SIGN_UP.fulfilled: {
      const token = JSON.stringify(action.payload.data.access_token);
      Cookies.set("token", token, {
        // domain: ".spreadprolimited.com",
      });
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.access_token,
        },
      };
    }

    case authActionTypes.LOGIN.rejected:
    case authActionTypes.VERIFY_EMAIL.rejected:
    case authActionTypes.SIGN_UP.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    default:
      return state;
  }
};

export default authReducer;
