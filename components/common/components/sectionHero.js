import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const SectionHero = ({ title }) => {
  return (
    <header className="bg-gray-100">
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
        <div className="px-4 max-w-screen-xl mx-auto sm:flex sm:items-center sm:justify-around">
          <h1 className="titleWithoutBorder text-center">{title}</h1>
          <img alt="Lakiery" className="sm:max-w-md" src="/hero-image.png" />
        </div>
      </ScrollAnimation>
      <div className=" border-horizontal-gold">
        <div className="px-4 max-w-screen-xl mx-auto py-6 color-gold">
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Link href="/">
              <a>Strona główna</a>
            </Link>
            <span className="mx-6">{'>'}</span>
            <span className="cursor-pointer">{title}</span>
          </ScrollAnimation>
        </div>
      </div>
    </header>
  );
};

SectionHero.propTypes = {
  title: PropTypes.string,
};

export default SectionHero;
