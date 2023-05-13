import { createSlice, SliceCaseReducers, createAsyncThunk } from '@reduxjs/toolkit';

interface IList {
  name: string;
  id: number;
}

interface IState {
  title: string;
  count: number;
  list: IList[];
}

export const getIndexList = createAsyncThunk(
  'index/getList',
  async () => {
    const res = await fetch('http://localhost:3030/api/list');
    if (res.ok) {
      const list = res.json();
      return list
    }
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
      .addCase(getIndexList.fulfilled, (state, action) => {
        state['list'] = action.payload.list;
      })
  },
})

export const { addCount } = indexSlice.actions;

export default indexSlice.reducer;