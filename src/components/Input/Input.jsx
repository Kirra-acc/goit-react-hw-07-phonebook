import s from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/phonebookSlice.js';

export const Input = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }
    try {
      dispatch(addContact({ name, number }));
    } finally {
      event.target.reset();
    }
  };
  

  return (
    <form className={s.formBox} autoComplete="off" onSubmit={createContact}>
      <div className={s.inputBox}>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="text"
            name="name"
            placeholder="Contact name"
          />
        </label>
      </div>

      <div className={s.inputBox}>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="tel"
            name="number"
            placeholder="Phone number"
            required
          />
        </label>
      </div>

      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
