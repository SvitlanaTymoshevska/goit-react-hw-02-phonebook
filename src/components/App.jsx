import React, { Component } from "react";
import { Wrapper, TitlePhonebook, TitleContacts } from "components/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/ContactList/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  handleSubmit = data => { 
    const findedName = this.state.contacts.find(contact => { 
      if (contact.name.toLowerCase() === data.name.toLowerCase() && contact.number === data.number) {
        return contact.name;
      };
      return undefined;
    });

    if (findedName) {
      alert(`${findedName} is alredy in contacts.`);
      return;
    }

    this.setState(({ contacts }) => { 
      return { contacts: [...contacts, data] };
    });
  };

  handlFiltre = (e) => { 
    this.setState({filter: e.currentTarget.value});
  };

  getfiltredContacts = () => {
    const { contacts, filter } = this.state;
    
    if (!filter) {
      return contacts;
    }

    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));
  };

  handleDelete = (id) => {
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: updatedContacts };
    });
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getfiltredContacts();

    return (
      <Wrapper>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm
          onSubmit={this.handleSubmit}
        />

        <TitleContacts>Contacts</TitleContacts>
        <Filter
          filter={filter}
          onFiltre={this.handlFiltre}
        />
        <ContactList
          contacts={filtredContacts}
          onDelete={this.handleDelete}
        />
      </Wrapper>
    ); 
  };
};