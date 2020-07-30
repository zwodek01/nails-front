import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button
      className={classNames('hamburger', {
        open: isOpen,
      })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
