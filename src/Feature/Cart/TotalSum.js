const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

// slice for count quantity in cart

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);
// slice for total rpice in cart
export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.dataPrice * current.quantity),
    0
  )
);
