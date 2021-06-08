import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { userReducer } from "./AuthReducer";

export default combineReducers({
  contacted: contactReducer,
  user: userReducer,
});
