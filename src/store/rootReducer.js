import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./properties";
import modalReducer from "./modal";
import userReducer from "./user";
import walletReducer from "./wallet";
import reservedReducer from "./reserved_propety";
import careersReducer from "./career";
import expertiesReducer from "./expert";

export default combineReducers({
  auth: authReducer,
  properties: propertyReducer,
  modal: modalReducer,
  user: userReducer,
  wallet: walletReducer,
  reserved: reservedReducer,
  careers: careersReducer,
  experts: expertiesReducer,
});
