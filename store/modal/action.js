import modalActionTypes from "./type";

export const showModal = () => (dispatch) => {
  return dispatch({
    type: modalActionTypes.SHOW_MODAL,
  });
};

export const closeModal = () => (dispatch) => {
  return dispatch({
    type: modalActionTypes.CLOSE_MODAL,
  });
};
