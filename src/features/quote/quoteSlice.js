import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchQuote } from './quoteAPI';

const initialState = {
  value: 'All Shall Be Well and all shall be well',
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getQuote = createAsyncThunk(
  'quote/getQuote',
  async () => {
    const response = await fetchQuote();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectQuote = (state) => state.quote.value;
export default quoteSlice.reducer;
