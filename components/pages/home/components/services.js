import React from 'react';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:my-24">
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img alt="Ikona manicure" className="mx-auto" src="/manicure.png" />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Manicure</h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img alt="Ikona manicure" className="mx-auto" src="/pedicure.png" />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Pedicure</h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img
              alt="Ikona manicure"
              className="mx-auto"
              src="/nail-polish.png"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">
            Sztuka zdobienia paznokci
          </h4>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
        <div className="my-6 md:my-0">
          <LazyLoad>
            <img alt="Ikona manicure" className="mx-auto" src="/eyebrow.png" />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Stylizacja brwi</h4>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;
