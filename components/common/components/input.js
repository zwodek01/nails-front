import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Input = ({
  name,
  placeholder,
  error,
  errorMsg,
  label,
  validation,
  register,
  icon,
}) => {
  return (
    <div>
      {label && (
        <div
          className={classNames(
            {
              ['text-red-600 font-semibold']: error,
            },
            'mb-1'
          )}
        >
          {label}
        </div>
      )}
      <div className="relative">
        {icon && <div className="icon-input">{icon}</div>}
        <input
          className={classNames(
            {
              ['border border-red-500']: error,
              ['px-10']: icon,
            },
            'w-full h-12 px-3 rounded-md'
          )}
          name={name}
          placeholder={placeholder}
          ref={register(validation)}
          type="text"
        />
      </div>
      {error && (
        <div className="text-red-600 mt-1 font-semibold">{errorMsg}</div>
      )}
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.string,
  validation: PropTypes.string,
};

export default Input;
