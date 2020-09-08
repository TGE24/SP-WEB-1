import careesActionTypes from "./actionTypes";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch careers
    case careesActionTypes.FETCH_CAREERS.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case careesActionTypes.FETCH_CAREERS.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...action.payload.data,
        },
      };
    }
    case careesActionTypes.FETCH_CAREERS.rejected: {
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

export default careersReducer;
