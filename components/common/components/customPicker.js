import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DatePicker, { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomPicker = ({
  error,
  setSelected,
  selected,
  date,
  time,
  label,
  errorMessage,
  setError,
  icon,
  placeholderText,
}) => {
  registerLocale('pl', pl);

  return (
    <div>
      <div
        className={classNames(
          {
            ['text-red-600']: error,
          },
          'mb-1'
        )}
      >
        {label}
      </div>
      {date && (
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
          <DatePicker
            className={classNames(
              {
                ['border border-red-400 placeholder-red-300']: error,
                ['px-10']: icon,
              },
              'w-full h-12 px-3 rounded-md'
            )}
            dateFormat="dd-MM-yyy"
            disabledKeyboardNavigation
            locale="pl"
            minDate={new Date()}
            onChange={selected => {
              setSelected(selected);
              setError(false);
            }}
            placeholderText={placeholderText}
            selected={selected}
            showDisabledMonthNavigation
          />
        </div>
      )}
      {time && (
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
          <DatePicker
            className={classNames(
              {
                ['border border-red-400 placeholder-red-300']: error,
                ['px-10']: icon,
              },
              'w-full h-12 px-3 rounded-md'
            )}
            dateFormat="HH:mm"
            disabledKeyboardNavigation
            locale="pl"
            onChange={selected => {
              setSelected(selected);
              setError();
            }}
            placeholderText={placeholderText}
            selected={selected}
            showDisabledMonthNavigation
            showTimeSelect
            showTimeSelectOnly
            timeCaption="Godzina"
            timeIntervals={15}
          />
        </div>
      )}

      {error && <div className="text-red-600 mt-1">{errorMessage}</div>}
    </div>
  );
};

CustomPicker.propTypes = {
  date: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  placeholderText: PropTypes.string,
  selected: PropTypes.any,
  setError: PropTypes.func,
  setSelected: PropTypes.func,
  time: PropTypes.bool,
};

export default CustomPicker;
