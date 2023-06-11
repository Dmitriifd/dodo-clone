import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { productsReducer } from "./products/slice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;