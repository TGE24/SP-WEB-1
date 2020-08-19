import modalActionTypes from "./type";

const initialState = {
  show: false,
  signup: false,
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
    case modalActionTypes.SIGNUP_MODAL: {
      return {
        ...state,
        signup: true,
      };
    }
    case modalActionTypes.CLOSE_SIGNUP: {
      return {
        ...state,
        signup: false,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
