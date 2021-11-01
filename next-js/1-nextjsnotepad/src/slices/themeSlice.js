import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "white",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
//selectors
export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
