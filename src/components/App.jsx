import ContactList from "./ContactsList/ContactsList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

const App = () => {  
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
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;