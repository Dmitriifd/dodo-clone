import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, ISauceItem } from 'types/cartItem';

import { RootState } from '../store';

interface CartState {
  isOpenCart: boolean;
  totalPrice: number;
  totalCount: number;
  orderList: ICartItem[] & ISauceItem[];
}

const initialState: CartState = {
  isOpenCart: false,
  totalPrice: 0,
  totalCount: 0,
  orderList: []
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
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { title, type, id, size, diameter, quantity, addedIngredients = [] } = action.payload;
      const sortedAddedIngredients = addedIngredients.map((obj) => obj.title).sort();

      const findProduct = state.orderList.find((product: ICartItem) => {
        const sortedProductIngredients = product.addedIngredients?.map((obj) => obj.title).sort();

        return (
          product.title === title &&
          product.type === type &&
          product.size === size &&
          product.diameter === diameter &&
          JSON.stringify(sortedProductIngredients) === JSON.stringify(sortedAddedIngredients)
          || product.id === id
        );
      });

      if (findProduct) {
        findProduct.quantity += quantity;
      } else {
        state.orderList.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.orderList = state.orderList.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const findProduct = state.orderList.find((item) => item.id === action.payload);
      if (findProduct) {
        findProduct.quantity++;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const findProduct = state.orderList.find((item) => item.id === action.payload);
      if (findProduct) {
        if (findProduct.quantity > 1) {
          findProduct.quantity--;
        } else {
          state.orderList = state.orderList.filter((item) => item.id !== action.payload);
        }
      }
    },
    addProductFromCart(state, action: PayloadAction<ISauceItem>) {
      const findProduct = state.orderList.find((item) => {
        return item.id === action.payload.id;
      });
      if (findProduct) {
        findProduct.quantity++;
      } else {
        state.orderList.push(action.payload);
      }
    }
  }
});

export const selectTotalItems = (state: RootState) =>
  state.cart.orderList.reduce((total, item) => total + item.quantity, 0);

export const selectTotalCost = (state: RootState) =>
  state.cart.orderList.reduce((total, item) => total + item.price * item.quantity, 0);

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addProductFromCart
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart;
