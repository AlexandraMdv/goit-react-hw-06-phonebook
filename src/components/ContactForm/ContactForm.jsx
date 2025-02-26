import styles from './ContactForm.module.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {
    // state = {
    //     name: '',
    //     number: '',
    // }

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (ev) => {
        const {name: inputName, value} = ev.target;
        if(inputName === 'name') {
            console.log(inputName);
            
            setName(value);
        } else {
            console.log(inputName);
            
            setNumber(value);
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();        

        onSubmit({id: nanoid(), name: name, number: number});
        setName('');
        setNumber('');
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.addPhonebookForm}>
            <label htmlFor='name' className={styles.label}>
                <span className={styles.labelTitle}>Name</span>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter full name"
                    value={name}
                    pattern="^[a-zA-Z]+((['\s\-][a-zA-Z ])?[a-zA-Z]*)*$" //pattern updated because of "space" error
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
                    required 
                />
            </label>

            <label htmlFor='number' className={styles.label}>
                <span className={styles.labelTitle}>Phone Number</span>
                <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Enter phone number"
                    value={number}
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}" //pattern updated because of "-" error
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    required
                ></input>
            </label>
    
            <button type="submit">Add contact</button>
        </form>
    )
} 

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;