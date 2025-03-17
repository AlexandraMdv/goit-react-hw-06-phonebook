import styles from './ContactsList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { selectFilteredContacts, selectIsLoading, selectError } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  useEffect(() => {
    dispatch(fetchContacts()); // діспатчимо екшен
  }, [dispatch]);
  
  const filteredContacts = useSelector(selectFilteredContacts); // Selector to get the filter value from the Redux store  
  const isLoading = useSelector(selectIsLoading); // Selector to get the loading status from the Redux store
  const error = useSelector(selectError); // Selector to get the error status from the Redux store

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, phone: number }) => (
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
    </>
  );
};

export default ContactList;


