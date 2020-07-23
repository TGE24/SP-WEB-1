import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./properties";
import modalReducer from "./modal";
import userReducer from "./user";

export default combineReducers({
  auth: authReducer,
  properties: propertyReducer,
  modal: modalReducer,
  user: userReducer,
});
