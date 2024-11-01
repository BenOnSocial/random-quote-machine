import { createSlice } from '@reduxjs/toolkit';
import { createQuote } from './quotes';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: '',
    author: '',
  },
  reducers: {
    getQuote: (state) => {
      const quote = createQuote();
      state.text = quote.text;
      state.author = quote.author;
    },
  },
});

export const { getQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
