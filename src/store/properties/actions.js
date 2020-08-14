import api from "helpers/request";
import actionTypes from "./type";
import { store } from "store";
import axios from "axios";

export const getHouses = (page) => async (dispatch) => {
  const payload = api.get("/houses?page=" + page + "&limit=" + 8);
  return dispatch({
    type: actionTypes.GET_HOUSES.default,
    payload,
  });
};

export const getLands = (page) => async (dispatch) => {
  const payload = api.get("/lands?page=" + page + "&limit=" + 8);
  return dispatch({
    type: actionTypes.GET_LANDS.default,
    payload,
  });
};

export const getLand = (landSlug) => async (dispatch) => {
  const {
    auth: { data },
  } = store.getState();
  let payload;
  data?.token
    ? (payload = api.get("/user/land/" + landSlug))
    : (payload = api.get("/land/auth_false/" + landSlug));

  return dispatch({
    type: actionTypes.GET_LAND.default,
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

export const payment = (data) => async (dispatch) => {
  const payload = api.post("/payment", data);
  return dispatch({
    type: actionTypes.PAYMENT.default,
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
