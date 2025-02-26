import styles from './ContactsList.module.css';
// import { Component } from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.listItem}>
        <span>{name}: {number}</span>
        <button
          className={styles.deleteBtn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;


