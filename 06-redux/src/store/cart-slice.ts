import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
