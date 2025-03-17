import styles from './ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact} from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const contacts = useSelector(selectContacts);  // Hook to extract data from the Redux store state
    const dispatch = useDispatch();  // Hook to dispatch actions to the Redux store

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const contact = {
            name: e.currentTarget.elements.name.value,
            number: e.currentTarget.elements.number.value,
            id: nanoid(),
        };
        
        const isNameAlreadyInList = contacts.some(({ name }) => name.toLowerCase() === contact.name.toLowerCase());
        const isNumberAlreadyInList = contacts.some(({ number }) => number === contact.number);

        if (isNameAlreadyInList) 
        {        
            Swal.fire({
                title: `'${contact.name}' is already in list`,
                icon: 'error',
                confirmButtonText: 'Try again'
            })
            return;
        } else if (isNumberAlreadyInList) {
            Swal.fire({
                title: `'${contact.number}' You already have this number in your contacts`,
                icon: 'error',
                confirmButtonText: 'Try again'
            })
            return;
        }

        dispatch(
            addContact(contact)
        );
        e.currentTarget.reset();
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.addPhonebookForm}>
            <label htmlFor="name" className={styles.label}>
                <span className={styles.labelTitle}>Name</span>
                <input
                    type="text"
                    name="name"
                    id={nanoid()}
                    placeholder="Enter full name"
                    pattern="^[a-zA-Z]+((['\s\-][a-zA-Z ])?[a-zA-Z]*)*$" //pattern updated because of "space" error
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required 
                />
            </label>

            <label htmlFor='number' className={styles.label}>
                <span className={styles.labelTitle}>Phone Number</span>
                <input
                    type="tel"
                    name="number"
                    id={nanoid()}
                    placeholder="Enter phone number"
                    pattern="^\d{3}-\d{3}-\d{4}$" //pattern updated because of "-" error
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                ></input>
            </label>
    
            <button type="submit">Add contact</button>
        </form>
    )
} 

export default ContactForm;