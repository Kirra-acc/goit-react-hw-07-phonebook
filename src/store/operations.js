// https://658b4e16ba789a962238a684.mockapi.io/contacts

import axios from 'axios';
import { fetchingData, isError, isPending } from './phonebookSlice';

axios.defaults.baseURL = 'https://658b4e16ba789a962238a684.mockapi.io/'

export const fetchContasctsThunk = () => async (dispatch) => {
    try {
    dispatch(isPending())
    const { data } = await axios.get('contacts')
    dispatch(fetchingData(data))
} catch (error) {
    dispatch(isError(error.message))
}
}