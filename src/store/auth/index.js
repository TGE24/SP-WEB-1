import authActionTypes from "./type";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.SIGN_UP.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.token,
        },
      };
    }

    case authActionTypes.SIGN_UP.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case authActionTypes.LOGIN.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.LOGIN.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.access_token,
        },
      };
    }

    case authActionTypes.LOGIN.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    case authActionTypes.VERIFY_EMAIL.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.VERIFY_EMAIL.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.token,
        },
      };
    }

    case authActionTypes.VERIFY_EMAIL.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    case authActionTypes.REQUEST_MAIL.pending: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.REQUEST_MAIL.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case authActionTypes.REQUEST_MAIL.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case authActionTypes.RESET_REQUEST.pending: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.RESET_REQUEST.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case authActionTypes.RESET_REQUEST.rejected: {
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
