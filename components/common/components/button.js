import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, disabled, onClick, type }) => {
  return (
    <button
      className="bg-black rounded text-white py-4 px-8 text-sm hover:bg-gray-800 transition duration-300"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
