import { createSlice, SliceCaseReducers, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface IState {
  title: string;
  count: number;
  list: IList[];
}

export const getIndexList = createAsyncThunk(
  'index/getList',
  async () => {
    const res = await axios.get('http://localhost:3030/api/list');
    return res.data;
  }
)

export const indexSlice = createSlice<IState, SliceCaseReducers<IState>>({
  name: 'index',
  initialState: {
    title: 'hello world123',
    count: 11,
    list: []
  },
  reducers: {
    addCount(state, action) {
      state['count'] += action.payload.count
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getIndexList.pending, (state, action) => {
        console.log('pending')
        console.log(action, 'action');
        console.log(state, 'state');
      })
      .addCase(getIndexList.fulfilled, (state, action) => {
        state['list'] = action.payload.list;
      })
      .addCase(getIndexList.rejected, (state, action) => {
        console.log('rejected')
        console.log(action, 'action');
        console.log(state, 'state');
      })
  },
})

export const { addCount } = indexSlice.actions;

export default indexSlice.reducer;