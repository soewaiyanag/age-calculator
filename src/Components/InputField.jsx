import PropTypes from "prop-types";

const InputField = ({ label, id, placeholder, pattern, value, onChange }) => {
  return (
    <div className="w-20">
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="p-4"
        pattern={pattern}
        value={value}
        onChange={onChange}
        maxLength={placeholder.length}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
