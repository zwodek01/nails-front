import React from 'react';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:my-24">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img
              alt="Ikona manicure"
              className="mx-auto"
              src="/manicure.webp"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Manicure</h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img
              alt="Ikona manicure"
              className="mx-auto"
              src="/pedicure.webp"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Pedicure</h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img
              alt="Ikona manicure"
              className="mx-auto"
              src="/nail-polish.webp"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">
            Sztuka zdobienia paznokci
          </h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img
              alt="Ikona manicure"
              className="mx-auto"
              src="/eyebrow.webp"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Stylizacja brwi</h4>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;
