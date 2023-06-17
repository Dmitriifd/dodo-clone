import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Ingredient } from 'types/product';

interface ProductsState {
  activeSize: number;
  activeType: number;
  currentPrice: number;
  ingredientsPrice: number;
  ingredients: Ingredient[];
}

const initialState: ProductsState = {
  activeSize: 1,
  activeType: 0,
  currentPrice: 0,
  ingredientsPrice: 0,
  ingredients: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectSize(state, action: PayloadAction<number>) {
      if (action.payload === 0) {
        state.activeType = 0;
      }
      state.activeSize = action.payload;
    },
    selectType(state, action: PayloadAction<number>) {
      state.activeType = action.payload;
    },
    setCurrentPrice(state, action: PayloadAction<number>) {
      state.currentPrice = state.ingredientsPrice + action.payload;
    },
    resetProduct(state) {
      state.activeSize = 1;
      state.activeType = 0;
      state.ingredientsPrice = 0;
      state.currentPrice = 0;
      state.ingredients = [];
    },
    addIngredient(
      state,
      action: PayloadAction<{ title: string; price: number; id: number }>
    ) {
      state.ingredientsPrice += action.payload.price;
      state.ingredients.push(action.payload);
    },
    removeIngredient(
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) {
      state.ingredientsPrice -= action.payload.price;
      state.ingredients = state.ingredients.filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

export const {
  selectSize,
  selectType,
  resetProduct,
  addIngredient,
  removeIngredient,
  setCurrentPrice
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
