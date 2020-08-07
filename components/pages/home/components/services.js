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
              src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/manicure.png?alt=media&token=c06e103f-ec3c-4ec9-93e9-bed4494369b5"
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
              src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/pedicure.png?alt=media&token=a23ecdc6-2a65-4520-8de6-31b5c4ad07a6"
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
              src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/nail-polish.png?alt=media&token=b0bda1d1-1c61-4f91-96c1-4aeeca82ed7e"
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
              src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/eyebrow.png?alt=media&token=66815acd-6126-44ab-ae3f-3387ffeee5ae"
            />
          </LazyLoad>
          <h4 className="titleNormalFont text-center">Stylizacja brwi</h4>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;
