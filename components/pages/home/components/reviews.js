import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import { reviews } from '../../../../data/reviews';
import Quote from '../../../../public/icons/quote';
SwiperCore.use([Navigation]);

const Reviews = () => {
  return (
    <section className="my-12 lg:my-24">
      <img
        alt="Zdjęcie paznokci"
        className="w-full object-cover"
        src="/image-1.png"
      />
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
                  <img
                    alt="Avatar"
                    className="mx-auto my-6"
                    src={review.image}
                  />
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
