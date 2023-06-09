import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./cart/slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


const store = configureStore({
  reducer: {
    cart: CartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;