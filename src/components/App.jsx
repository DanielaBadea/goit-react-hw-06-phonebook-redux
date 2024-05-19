import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterContacts/FilterContacts";
import { getContacts } from "../redux/selectors";
import { useSelector } from "react-redux";


export const App = () => {
  const users = useSelector(getContacts);
  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />

        {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
            <h3>Your phonebook has {users.length} contacts</h3>)
        }
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};


