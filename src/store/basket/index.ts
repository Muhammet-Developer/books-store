import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketState } from '../../types/Store';
import { IModule } from '..';

const initialState: IBasketState = {
  basket: [],
  totalAmount: 0
};

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    SET_BASKET: (state, action: PayloadAction<any>) => {
      state.basket = action.payload;
    },
    SET_TOTAL_AMOUNT: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
    SET_RESET: (state) => {
      state.basket = initialState.basket;
      state.totalAmount = initialState.totalAmount;
    },
  },
});

export const { SET_BASKET, SET_TOTAL_AMOUNT,SET_RESET } = BasketSlice.actions;
export const basketSelector = (state: IModule) => state.basket;
export default BasketSlice.reducer;