import { combineReducers } from "redux";
import business from "./BusinessReducer";
import person from "./PersonReducer";

export default combineReducers({
  business,
  person,
});
