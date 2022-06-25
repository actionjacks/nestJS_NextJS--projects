import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

export default combineReducers({
  themeColor: themeReducer,
});
