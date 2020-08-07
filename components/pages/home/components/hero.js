import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

const Hero = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce>
      <section className="px-4 my-12 lg:my-24 max-w-screen-xl mx-auto flex justify-center md:flex-col md:items-center lg:flex-row lg:justify-between transition-all">
        <SectionContentCard
          grayText="Moim celem jest dostarczenie najlepszych usług pielęgnacji paznokci w połączeniu z fachowymi technikami stosowanymi w branży salonów stylizacji paznokci."
          mainTitle
          title={
            <>
              Afra
              <br />
              Stylizacja paznokci
              <br />
              Kamila Witkiewicz
            </>
          }
        />
        <LazyLoad>
          <img
            alt="Lakiery"
            className="hidden md:block md:max-w-md lg:max-w-lg xl:max-w-2xl"
            src="/hero-image.webp"
          />
        </LazyLoad>
      </section>
    </ScrollAnimation>
  );
};

export default Hero;
