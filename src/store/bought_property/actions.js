import api from "helpers/request";
import boughtPropertiesActionTypes from "./actionTypes";

// get all careers
export const fetchBoughtProperty = () => (dispatch) => {
  const payload = api.get("/user/bought/properties");
  return dispatch({
    type: boughtPropertiesActionTypes.FETCH_BOUGHT_PROPERTY.default,
    payload,
  });
};
