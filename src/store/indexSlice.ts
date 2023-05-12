import { createSlice } from '@reduxjs/toolkit';

export const indexSlice = createSlice({
  name: 'index',
  initialState: {
    title: 'hello world123',
    count: 11
  },
  reducers: {
    addCount(state, action) {
      state['count'] += action.payload.count
    }
  }
})

export const { addCount } = indexSlice.actions;

export default indexSlice.reducer;