import React from 'react';
import s from './ListItem.module.css';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../store/phonebookSlice.js';
import { deleteContactsThunk } from 'store/operations';

export const ListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{phone}</span>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
