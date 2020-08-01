import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Input = ({
  name,
  placeholder,
  error,
  errorMsg,
  label,
  validation,
  register,
  icon,
  classContainer,
  textarea,
  rows = 4,
}) => {
  return (
    <div className={classContainer}>
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
        {icon && (
          <div className="icon-input">
            <FontAwesomeIcon
              className={classNames({
                ['text-red-500']: error,
              })}
              icon={icon}
            />
          </div>
        )}
        {textarea ? (
          <textarea
            className={classNames(
              {
                ['border border-red-400 placeholder-red-300']: error,
                ['px-10']: icon,
              },
              'w-full p-3 rounded-md'
            )}
            name={name}
            placeholder={placeholder}
            ref={register(validation)}
            rows={rows}
          />
        ) : (
          <input
            className={classNames(
              {
                ['border border-red-400 placeholder-red-300']: error,
                ['px-10']: icon,
              },
              'w-full h-12 px-3 rounded-md'
            )}
            name={name}
            placeholder={placeholder}
            ref={register(validation)}
            type="text"
          />
        )}
      </div>
      {error && (
        <div className="text-red-600 mt-1 font-semibold">{errorMsg}</div>
      )}
    </div>
  );
};

Input.propTypes = {
  classContainer: PropTypes.string,
  error: PropTypes.object,
  errorMsg: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rows: PropTypes.number,
  textarea: PropTypes.bool,
  validation: PropTypes.object,
};

export default Input;
