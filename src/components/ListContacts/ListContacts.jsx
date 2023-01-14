import PropTypes from 'prop-types';
import ItemContact from 'components/ItemContact/ItemContact';

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ItemContact
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ListContacts;
