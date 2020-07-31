import React from 'react';
import Navigation from './navigation';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-32">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
