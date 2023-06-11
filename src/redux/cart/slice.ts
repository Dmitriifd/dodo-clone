import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartState {
  isOpenCart: boolean;
}

const initialState: CartState = {
  isOpenCart: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isOpenCart = true;
    },
    closeCart(state) {
      state.isOpenCart = false;
    }
  }
});

export const { openCart, closeCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart;
