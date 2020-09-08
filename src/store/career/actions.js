import api from "helpers/request";
import careerActionTypes from "./actionTypes";

// get all careers
export const fetchCareer = () => (dispatch) => {
  const payload = api.get("/spread_careers");
  return dispatch({
    type: careerActionTypes.FETCH_CAREERS.default,
    payload,
  });
};
