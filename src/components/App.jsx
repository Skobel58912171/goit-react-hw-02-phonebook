import { Component } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import InputFilter from './InputFilter/InputFilter';
import ListContacts from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    this.setState({
      contacts: [
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    });
  };

  deletContact = () => {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          padding: 50,
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <FormContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <InputFilter onFilter={this.searchContact} />
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.deletContact}
        />
      </div>
    );
  }
}
