import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionContentCard from './sectionContentCard';

const Hours = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
      <div className="px-4 my-12 max-w-screen-xl mx-auto md:flex md:justify-between lg:my-24">
        <SectionContentCard
          blackText={
            <>
              <p className="my-4">Pon-Pią: 9 – 17</p>
              <p className="my-4">Sobota: Nieczynne</p>
              <p className="my-4">Niedziela: Nieczynne</p>
            </>
          }
          title="Godziny otwarcia"
        />
        <SectionContentCard
          blackText={
            <>
              <p>Bielsk Podlaski</p>
              <p>ul. Ulica 1</p>
              <div className="my-4">
                <a href="tel:555555555">555 555 555</a>
              </div>
              <div className="my-4">
                <a href="mailto:info@info.pl">info@info.pl</a>
              </div>
            </>
          }
          title="Kontakt"
        />
      </div>
    </ScrollAnimation>
  );
};

export default Hours;
