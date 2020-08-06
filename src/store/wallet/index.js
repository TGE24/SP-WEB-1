import walletActionTypes from "./actionTypes";
import parseError from "helpers/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case walletActionTypes.FUND_WALLET.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case walletActionTypes.FUND_WALLET.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case walletActionTypes.FUND_WALLET.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // transactions
    case walletActionTypes.USER_TRANSACTION.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case walletActionTypes.USER_TRANSACTION.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...action.payload.data,
        },
      };
    }
    case walletActionTypes.USER_TRANSACTION.rejected: {
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

export default walletReducer;
