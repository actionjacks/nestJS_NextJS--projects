import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //--------------------------ADD
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    //--------------------------REMOVE
    removeFromBasket: (state, action) => {
      //copy of existing basket
      let newBasket = [...state.items];
      let index;

      index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      console.log(index);

      if (index >= 0) {
        //the item found, we can remove
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id) ${action.payload.id} no item in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotalBasketPrice = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
