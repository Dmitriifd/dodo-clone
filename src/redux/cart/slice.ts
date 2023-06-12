import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICartItem } from 'types/cartItem';

interface CartState {
  isOpenCart: boolean;
  totalPrice: number;
  orderList: ICartItem[];
  count: number;
}

const initialState: CartState = {
  isOpenCart: false,
  totalPrice: 0,
  count: 0,
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
      const {
        id,
        title,
        price,
        imageUrl,
        type,
        size,
        diameter,
        quantity,
        addedIngredients,
      } = action.payload;

      const findProduct = state.orderList.find((product: any) => {
        const arr1 = product.addedIngredients.map((obj: any) => obj.title);
        const arr2 = addedIngredients.map((obj) => obj.title);
        const result = JSON.stringify(arr1) === JSON.stringify(arr2)

        return (
          product.title === title &&
          product.type === type &&
          product.size === size &&
          product.diameter === diameter &&
          result
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
  }
});

export const { openCart, closeCart, addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart;
