import userActionTypes from "./types";
import parseError from "../../helpers/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_PROFILE.pending: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case userActionTypes.USER_PROFILE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...action.payload.data,
        },
      };
    }
    case userActionTypes.USER_PROFILE.rejected: {
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

export default userReducer;
