import { createSlice } from '@reduxjs/toolkit';

const productModalSlice = createSlice({
  name: 'productModal',
  initialState: {
    selectedProduct: null,
    isOpen: false
  },
  reducers: {
    openProductModal: (state, action) => {
      state.isOpen = true;
      state.selectedProduct = action.payload;
    },
    closeProductModal: (state) => {
      state.isOpen = false;
      state.selectedProduct = null;
    }
  }
});

export const { openProductModal, closeProductModal } =
  productModalSlice.actions;
export const productModalReducer = productModalSlice.reducer;
