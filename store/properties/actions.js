import api from "../../helpers/request";
import actionTypes from "./type";
import { store } from "../../store";
import axios from "axios";

export const getHouses = () => async (dispatch) => {
  const payload = api.get("/houses");
  return dispatch({
    type: actionTypes.GET_HOUSES.default,
    payload,
  });
};

export const getHouse = (houseSlug) => async (dispatch) => {
  const {
    auth: { data },
  } = store.getState();
  let payload;
  data?.token
    ? (payload = api.get("/user/house/" + houseSlug))
    : (payload = api.get("/house/auth_false/" + houseSlug));

  return dispatch({
    type: actionTypes.GET_HOUSE.default,
    payload,
  });
};

export const onlineInspection = (data) => async (dispatch) => {
  const payload = api.post("/payment", data);
  return dispatch({
    type: actionTypes.ONLINE_INSPECTION.default,
    payload,
  });
};

export const outrightPayment = (data) => async (dispatch) => {
  const payload = api.post("/payment", data);
  return dispatch({
    type: actionTypes.OUTRIGHT_PAYMENT.default,
    payload,
  });
};

export const verifyPayment = (reference) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  };
  const payload = axios.get(
    "https://api.paystack.co/transaction/verify/" + reference,
    config
  );
  return dispatch({
    type: actionTypes.VERIFY_PAYMENT.default,
    payload,
  });
};
