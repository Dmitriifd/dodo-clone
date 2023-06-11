import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  activeSize: number;
  activeType: number;
  currentPrice: number;
  ingredientsPrice: number;
}

const initialState: ProductsState = {
  activeSize: 1,
  activeType: 0,
  currentPrice: 0,
  ingredientsPrice: 0
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
    resetCurrentPrice(state) {
      state.activeSize = 1;
      state.activeType = 0;
      state.ingredientsPrice = 0;
      state.currentPrice = 0;
    },
    addIngredient(state, action: PayloadAction<number>) {
      state.ingredientsPrice += action.payload;
    },
    removeIngredient(state, action: PayloadAction<number>) {
      state.ingredientsPrice -= action.payload;
    }
  }
});

export const {
  selectSize,
  selectType,
  resetCurrentPrice,
  addIngredient,
  removeIngredient,
  setCurrentPrice
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
