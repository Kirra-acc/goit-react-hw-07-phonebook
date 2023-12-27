import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContasctsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};


export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContasctsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.loading = false;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(item => item.id !== payload.id);
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        // state.contacts.isLoading = false;
      })
      .addCase(fetchContasctsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContasctsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
