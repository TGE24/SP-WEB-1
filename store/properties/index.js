import actionTypes from "./type";
import parseError from "../../helpers/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOUSES.pending:
    case actionTypes.GET_HOUSE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.GET_HOUSES.fulfilled:
    case actionTypes.GET_HOUSE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...action.payload.data },
      };
    }
    case actionTypes.GET_HOUSES.rejected:
    case actionTypes.GET_HOUSE.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case actionTypes.ONLINE_INSPECTION.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.ONLINE_INSPECTION.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case actionTypes.ONLINE_INSPECTION.rejected: {
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

export default propertyReducer;
