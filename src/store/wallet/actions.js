import api from "helpers/request";
import walletActionTypes from "./actionTypes";

export const fundWallet = ({ ...data }) => (dispatch) => {
  const payload = api.post("/property_wallet/credit", { ...data });
  return dispatch({
    type: walletActionTypes.FUND_WALLET.default,
    payload,
  });
};

// get transactions
export const getTransaction = (page) => (dispatch) => {
  const payload = api.get("/user/transactions?page=" + page + "&limit=" + 5);
  return dispatch({
    type: walletActionTypes.USER_TRANSACTION.default,
    payload,
  });
};
