import { useDeleteContactMutation } from 'services/contactsApi';
import { ListLi, ListBtnDelete } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const { id, name, phone } = contact;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ListLi key={id}>
      {name} {phone}
      <ListBtnDelete onClick={() => deleteContact(id)}>Delete</ListBtnDelete>
    </ListLi>
  );
}
