import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    },
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity = parseInt(quantity);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
