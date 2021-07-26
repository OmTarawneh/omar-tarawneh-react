import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from 'components/Input/input.styles';

function Input({ type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default Input;
