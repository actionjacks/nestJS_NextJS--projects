import { CHANGE_THEME } from "./types";

export const changeTheme = (themeColor) => {
  return {
    type: CHANGE_THEME,
    payload: themeColor,
  };
};
