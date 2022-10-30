import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { Container, Title1 } from './App.styled';
import {useGetContactsQuery} from "services/contactsApi";

export default function App() {
  const {isFetching} = useGetContactsQuery();
  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Filter />
      {isFetching && <Loader />}
      <ContactList />
    </Container>
  );
}
