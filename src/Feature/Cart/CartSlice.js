import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // slice for adding product to cart
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    // slice for remove specific product from cart
    removeTodo(state, { payload }) {
      return state.filter((item) => item.id !== payload);
    },
    // slice for increment data product to cart
    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    // slice for decrement data product to cart

    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    // slice for clear the cart

    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increament, decrement, clear, removeTodo } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
