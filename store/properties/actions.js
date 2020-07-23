import api from "../../helpers/request";
import actionTypes from "./type";
import { store } from "../../store";

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
