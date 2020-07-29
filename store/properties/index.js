import actionTypes from "./type";
import parseError from "../../helpers/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
  paystackData: null,
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
    case actionTypes.ONLINE_INSPECTION.pending:
    case actionTypes.OUTRIGHT_PAYMENT.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.ONLINE_INSPECTION.fulfilled:
    case actionTypes.OUTRIGHT_PAYMENT.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case actionTypes.ONLINE_INSPECTION.rejected:
    case actionTypes.OUTRIGHT_PAYMENT.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case actionTypes.VERIFY_PAYMENT.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case actionTypes.VERIFY_PAYMENT.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        paystackData: { ...action.payload.data },
      };
    }

    case actionTypes.VERIFY_PAYMENT.rejected: {
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
