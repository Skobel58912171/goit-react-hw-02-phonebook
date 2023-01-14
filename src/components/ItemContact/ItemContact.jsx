import PropTypes from 'prop-types';

import { DataContact } from './ItemContact.styled';
import { BtnDelete } from './ItemContact.styled';

const ItemContact = ({ contact: { name, number }, onDelete }) => {
  return (
    <>
      <DataContact>
        {name}:{number}
      </DataContact>
      <BtnDelete type="button" onClick={onDelete}>
        Delete
      </BtnDelete>
    </>
  );
};

ItemContact.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  }),
};
export default ItemContact;
