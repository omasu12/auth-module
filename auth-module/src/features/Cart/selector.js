import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, items) => count + items.quantity, 0)
);

export const cartItemsToTal = createSelector(cartItemsSelector,(cartItems)=>
    cartItems.reduce((total,items)=> total + items.quantity * items.salePrice,0)
)