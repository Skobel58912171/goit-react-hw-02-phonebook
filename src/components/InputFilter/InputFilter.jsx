const InputFilter = ({ filter, onFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={() => onFilter(filter)}
        />
      </label>
    </form>
  );
};
export default InputFilter;
