import boughtPropertyActionTypes from "./actionTypes";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const boughtPropertyReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch careers
    case boughtPropertyActionTypes.FETCH_BOUGHT_PROPERTY.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case boughtPropertyActionTypes.FETCH_BOUGHT_PROPERTY.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...action.payload.data,
        },
      };
    }
    case boughtPropertyActionTypes.FETCH_BOUGHT_PROPERTY.rejected: {
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

export default boughtPropertyReducer;
