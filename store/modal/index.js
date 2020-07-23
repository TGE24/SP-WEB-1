import modalActionTypes from "./type";

const initialState = {
  show: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL: {
      return {
        ...state,
        show: true,
      };
    }
    case modalActionTypes.CLOSE_MODAL: {
      return {
        ...state,
        show: false,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
