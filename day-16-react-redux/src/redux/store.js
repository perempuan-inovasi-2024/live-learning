import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // brankas yg lain
    // brankas yg lain
  },
});

export default store;
