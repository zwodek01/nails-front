import React from 'react';
import PropTypes from 'prop-types';

const SectionContentCard = ({ title, mainTitle, blackText, grayText }) => {
  return (
    <div className="lg:max-w-lg">
      {mainTitle ? (
        <h1 className="title text-center">{title}</h1>
      ) : (
        <h2 className="title text-center">{title}</h2>
      )}
      {blackText && (
        <p className="my-6 text-black text-center xs:text-lg md:text-xl">
          {blackText}
        </p>
      )}
      {grayText && (
        <p className="mt-6 text-gray-600 text-center xs:text-lg md:text-xl">
          {grayText}
        </p>
      )}
    </div>
  );
};

SectionContentCard.propTypes = {
  blackText: PropTypes.string,
  grayText: PropTypes.string,
  mainTitle: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default SectionContentCard;
