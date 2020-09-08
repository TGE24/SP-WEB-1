import api from "helpers/request";
import careerActionTypes from "./actionTypes";

// get all careers
export const fetchExperts = () => (dispatch) => {
  const payload = api.get("/expert");
  return dispatch({
    type: careerActionTypes.FETCH_EXPECTIES.default,
    payload,
  });
};
