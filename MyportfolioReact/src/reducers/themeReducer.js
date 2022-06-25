import { CHANGE_THEME } from "../actions/types";

export default (themeColor = "white", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;

    default:
      return themeColor;
  }
};
