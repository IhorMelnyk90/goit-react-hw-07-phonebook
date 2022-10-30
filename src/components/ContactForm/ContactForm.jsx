import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormGroup, NameGroup, Input, Btn } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from "services/contactsApi"




const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();


  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.find(contact => contact.name.toLowerCase() === name.toLocaleLowerCase())) {
      return alert(`${name} is already in contact`);
    }
      addContact({name, phone});

    setName('');
    setPhone('');
  };



  return (
    <FormGroup onSubmit={handleSubmit}>
        <NameGroup>
          <label htmlFor={nameId}>Name</label>
          <Input
            id={nameId}
            value={name}
            onChange={handleInputChange}            
            placeholder="Soul Goodman"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </NameGroup>
        <NameGroup>
          <label htmlFor={numberId}>Phone</label>
          <Input
            id={numberId}
            value={phone}
            onChange={handleInputChange}            
            placeholder="38 097 777 77 77"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </NameGroup>
        <Btn>Add contact</Btn>
      </FormGroup>
  )
}

export default ContactForm;

