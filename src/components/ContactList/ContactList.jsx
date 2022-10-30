import { useGetContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contacts = filteredContacts();

  return (
    <>
      {contacts && (
        <ul>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} contact={{ id, name, phone }} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
