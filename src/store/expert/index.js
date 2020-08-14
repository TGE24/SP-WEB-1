import expertsActionTypes from "./actionTypes";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const expertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch careers
    case expertsActionTypes.FETCH_EXPECTIES.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case expertsActionTypes.FETCH_EXPECTIES.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...action.payload.data,
        },
      };
    }
    case expertsActionTypes.FETCH_EXPECTIES.rejected: {
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

export default expertiesReducer;
