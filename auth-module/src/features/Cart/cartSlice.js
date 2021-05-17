import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  // chỉ định những hàng động
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, actions) {
      // newItems = {id, product, quantity}
      const newItems = actions.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItems.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItems.quantity;
      } else {
        state.cartItems.push(newItems);
      }
    },
    updateQuantity(state, actions) {
      const { id, quantity } = actions.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeItemsFromCart(state, actions) {
      const itemsRemove = actions.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== itemsRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, removeItemsFromCart, updateQuantity } =
  actions;
export default reducer; //default export
