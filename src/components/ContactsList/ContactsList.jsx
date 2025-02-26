import styles from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


