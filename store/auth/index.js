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
    //login
    case authActionTypes.LOGIN.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.LOGIN.fulfilled: {
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

    case authActionTypes.LOGIN.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    // signup
    case authActionTypes.SIGN_UP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.SIGN_UP.fulfilled: {
      const token = JSON.stringify(action.payload.data.token);
      Cookies.set("token", token, {
        // domain: ".spreadprolimited.com",
      });
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

    // google authentication
    case authActionTypes.GOOGLE_SIGNUP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.GOOGLE_SIGNUP.fulfilled: {
      const token = JSON.stringify(action.payload.data.token);
      Cookies.set("token", token, {
        // domain: ".spreadprolimited.com",
      });
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.token,
        },
      };
    }

    case authActionTypes.GOOGLE_SIGNUP.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // twitter authentication
    case authActionTypes.TWITTER_SIGNUP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.TWITTER_SIGNUP.fulfilled: {
      const token = JSON.stringify(action.payload.data.token);
      Cookies.set("token", token, {
        // domain: ".spreadprolimited.com",
      });
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.token,
        },
      };
    }

    case authActionTypes.TWITTER_SIGNUP.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // facebook authentication
    case authActionTypes.FACEBOOK_SIGNUP.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.FACEBOOK_SIGNUP.fulfilled: {
      const token = JSON.stringify(action.payload.data.token);
      Cookies.set("token", token, {
        // domain: ".spreadprolimited.com",
      });
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.token,
        },
      };
    }

    case authActionTypes.FACEBOOK_SIGNUP.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    //verify email
    case authActionTypes.VERIFY_EMAIL.pending: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.VERIFY_EMAIL.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case authActionTypes.VERIFY_EMAIL.rejected: {
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
