import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className="px-4 my-12 lg:my-24 max-w-screen-xl mx-auto flex justify-center md:flex-col md:items-center lg:flex-row lg:justify-between">
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
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
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
        <img
          alt="Lakiery"
          className="hidden md:block md:max-w-md lg:max-w-lg xl:max-w-2xl"
          src="/hero-image.png"
        />
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
