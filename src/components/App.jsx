import { useState, useEffect } from "react";
import ContactList from "./ContactsList/ContactsList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import Swal from 'sweetalert2'

const CONTACTS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(CONTACTS_KEY);
    return savedContacts ? JSON.parse(savedContacts) : 
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    }
  );

  const [filter, setFilter] = useState('');

  // Add contacts to localStorage 
  // React Hooks: Instead of componentDidMount use useEffect hook
  useEffect(() => {
    const data = localStorage.getItem(CONTACTS_KEY);

    try {
      if(data) {
        setContacts(JSON.parse(data));
      }
    } catch(error) {
      console.error(error);
    }
  }, []);

  // Update contacts in localStorage
  // React Hooks: Instead of componentDidUpdate use useEffect hook
  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      Swal.fire({
        title: `${newContact.name} is already in list`,
        icon: 'error',
        confirmButtonText: 'Try again'
      })
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 50,
        padding: 20,
        borderRadius: 10,
        boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)',
        fontSize: 40,
        maxWidth: 400,
        color: '#010101'
      }}
      className="phonebookSection"
    >
      <h1 style={{fontSize: 40}}>Phonebook</h1>
      <ContactForm onSubmit={addContact}/>

      <Filter filter={filter} handleFilterChange={changeFilter}/>
      <ContactList 
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
       
    </div>
  );
};

export default App;