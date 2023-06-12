import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICartItem } from 'types/cartItem';
import { calcTotal } from 'utils/calcTotal';

interface CartState {
  isOpenCart: boolean;
  totalPrice: number;
  totalCount: number;
  orderList: ICartItem[];
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
      const {
        id,
        title,
        price,
        imageUrl,
        type,
        size,
        diameter,
        quantity,
        addedIngredients
      } = action.payload;

      const findProduct = state.orderList.find((product: ICartItem) => {
        const arr1 = product.addedIngredients.map((obj) => obj.title);
        const arr2 = addedIngredients.map((obj) => obj.title);
        const result = JSON.stringify(arr1) === JSON.stringify(arr2);

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
        [state.totalCount, state.totalPrice] = calcTotal(state.orderList);
      } else {
        state.orderList.push(action.payload);
        [state.totalCount, state.totalPrice] = calcTotal(state.orderList);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      );
      [state.totalCount, state.totalPrice] = calcTotal(state.orderList);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const findProduct = state.orderList.find(
        (item) => item.id === action.payload
      );
      if (findProduct) {
        findProduct.quantity++;
        [state.totalCount, state.totalPrice] = calcTotal(state.orderList);
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const findProduct = state.orderList.find((i) => i.id === action.payload);
      if (findProduct) {
        if (findProduct.quantity > 1) {
          findProduct.quantity--;
          [state.totalCount, state.totalPrice] = calcTotal(state.orderList);
        } else {
          state.orderList = state.orderList.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    }
  }
});

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart;
