import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './quoteAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async () => {
    const response = await fetchQuote();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    value: 'All Shall Be Well',
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectQuote = (state) => state.quote.value;
export default quoteSlice.reducer;
