import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
      state.contacts = payload
      state.loading = false
    },
    isPending: (state, { payload }) => {
      state.loading = true
      state.error = ''
    },
    isError: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload
      );
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push( payload );
      },
    },
  },
});

export const { deleteContact, setFilter, addContact, fetchingData, isPending, isError } = phonebookSlice.actions;

export default phonebookSlice.reducer;
