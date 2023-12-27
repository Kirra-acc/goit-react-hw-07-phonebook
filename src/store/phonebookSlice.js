import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContasctsThunk,
} from './operations';
// import { nanoid } from 'nanoid';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
    loading: false,
    error: '',
  },
  reducers: {
    fetchingData: (state, { payload }) => {
      state.contacts = payload;
      state.loading = false;
    },
    isPending: (state, { payload }) => {
      state.loading = true;
      state.error = '';
    },
    isError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
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

export const {
  deleteContact,
  setFilter,
  addContact,
  fetchingData,
  isPending,
  isError,
} = phonebookSlice.actions;

export default phonebookSlice.reducer;
