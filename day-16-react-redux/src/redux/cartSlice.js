import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    cartIncrease: (state) => {
      state.value += 1;
    },
    cartDecrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { cartIncrease, cartDecrease } = cartSlice.actions;
export default cartSlice.reducer;
