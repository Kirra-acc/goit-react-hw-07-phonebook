export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
export const selectLoading = state => state.phonebook.contacts.loading;
export const selectError = state => state.phonebook.contacts.error;
