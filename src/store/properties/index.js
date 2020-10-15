import actionTypes from "./type";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
  paystackData: null,
  recentProperties: null,
  actionLoading: false,
  filterData: null
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOUSES.pending:
    case actionTypes.GET_LANDS.pending:
    case actionTypes.GET_HOUSE.pending:
    case actionTypes.GET_LAND.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.GET_HOUSES.fulfilled:
    case actionTypes.GET_LANDS.fulfilled:
    case actionTypes.GET_HOUSE.fulfilled:
    case actionTypes.GET_LAND.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...action.payload.data },
      };
    }
    case actionTypes.GET_HOUSES.rejected:
    case actionTypes.GET_LANDS.rejected:
    case actionTypes.GET_HOUSE.rejected:
    case actionTypes.GET_LAND.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case actionTypes.PAYMENT.pending:
    case actionTypes.SUBSCRIPTION.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.PAYMENT.fulfilled:
    case actionTypes.SUBSCRIPTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: null,
      };
    }
    case actionTypes.PAYMENT.rejected:
    case actionTypes.SUBSCRIPTION.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    case actionTypes.VERIFY_PAYMENT.pending: {
      return {
        ...state,
        actionLoading: true,
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
    case actionTypes.RECENT_PROPERTIES.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.RECENT_PROPERTIES.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        recentProperties: { ...action.payload.data },
      };
    }
    case actionTypes.RECENT_PROPERTIES.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case actionTypes.FILTER.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false
      }
    }

    case actionTypes.FILTER.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: null,
        filterData: { ...action.payload.data }
      }
    }

    case actionTypes.FILTER.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload)
      }
    }

    default:
      return state;
  }
};

export default propertyReducer;
