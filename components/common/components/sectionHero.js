import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const SectionHero = ({ title }) => {
  return (
    <header className="bg-gray-100 pt-8">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="px-4 max-w-screen-xl mx-auto sm:flex sm:items-center sm:justify-around">
          <h1 className="titleWithoutBorder text-center">{title}</h1>
          <LazyLoad>
            <img alt="Lakiery" className="sm:max-w-md" src="/hero-image.webp" />
          </LazyLoad>
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
