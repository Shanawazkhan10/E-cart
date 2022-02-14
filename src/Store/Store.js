import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/Cart/CartSlice";

// store for manage the states of cart
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
