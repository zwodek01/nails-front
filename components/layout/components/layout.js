import React from 'react';
import Navigation from './navigation';
import PropTypes from 'prop-types';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-32">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
