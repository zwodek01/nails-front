import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { reviews } from '../../../../data/reviews';
import Quote from '../../../../public/icons/quote';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';
SwiperCore.use([Navigation]);

const Reviews = () => {
  return (
    <section className="my-12 lg:my-24">
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
        <img
          alt="Zdjęcie paznokci"
          className="w-full object-cover"
          src="/image-1.png"
        />
      </ScrollAnimation>
      <div className="background-brown">
        <div className="px-4 py-12 max-w-screen-xl mx-auto color-gold">
          <h2 className="title text-center color-gold">Opinie</h2>
          <div className="flex justify-center">
            <Quote />
          </div>
          <Swiper navigation>
            {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <div className="max-w-screen-xs mx-auto">
                  <p className="my-6 text-center xs:text-lg md:text-xl">
                    {review.review}
                  </p>
                  <LazyLoad offset={100}>
                    <img
                      alt="Avatar"
                      className="mx-auto my-6"
                      src={review.image}
                    />
                  </LazyLoad>
                  <p className="my-6 text-center xs:text-lg md:text-xl">
                    {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
