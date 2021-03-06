import api from "helpers/request";
import userActionTypes from "./types";

export const getUser = () => async (dispatch) => {
  const payload = api.get("/profile");
  return dispatch({
    type: userActionTypes.USER_PROFILE.default,
    payload,
  });
};

export const becomeAgent = ({ ...data }) => (dispatch) => {
  const payload = api.post("/agent", { ...data });
  return dispatch({
    type: userActionTypes.BECOME_AGENT.default,
    payload,
  });
};
export const updateProfile = ({ ...data }) => (dispatch) => {
  const payload = api.patch("/user", { ...data });
  return dispatch({
    type: userActionTypes.UPDATE_PROFILE.default,
    payload,
  });
};
export const becomeExpert = ({ ...data }) => (dispatch) => {
  const payload = api.post("/expert", { ...data });
  return dispatch({
    type: userActionTypes.BECOME_EXPERT.default,
    payload,
  });
};
