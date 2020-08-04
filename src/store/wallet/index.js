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

    default:
      return state;
  }
};

export default walletReducer;
