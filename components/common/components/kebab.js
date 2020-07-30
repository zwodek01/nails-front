import React, { useState } from 'react';
import PropTypes from 'prop-types';
import kebabStyles from '../styles/kebab.scss';
import classNames from 'classnames';

const Kebab = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="kebab">
      <button
        className="kebab__dots"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={classNames('kebab__children', {
          kebab__open: isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};

Kebab.propTypes = {
  children: PropTypes.node,
};

export default Kebab;
