import userActionTypes from "./types";
import parseError from "helpers/ParseError";
import authActionTypes from "../auth/type";

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

    // become agent
    case userActionTypes.BECOME_AGENT.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userActionTypes.BECOME_AGENT.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case userActionTypes.BECOME_AGENT.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // become expert
    case userActionTypes.BECOME_EXPERT.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userActionTypes.BECOME_EXPERT.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case userActionTypes.BECOME_EXPERT.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    //update profile
    case userActionTypes.UPDATE_PROFILE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userActionTypes.UPDATE_PROFILE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case userActionTypes.UPDATE_PROFILE.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    case authActionTypes.RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default userReducer;
