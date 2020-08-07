import React from 'react';
import SectionContentCard from './sectionContentCard';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

const WhyMe = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce>
      <section className="px-4 my-12 max-w-screen-xl mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:my-24">
        <div className="flex justify-center flex-1">
          <LazyLoad offset={100}>
            <img
              alt="Zdjęcie paznokci"
              className=" md:block md:max-w-md lg:max-w-lg xl:max-w-2xl"
              src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/image-2.png?alt=media&token=9bd0c61a-a994-4b03-9b20-ecd580648894"
            />
          </LazyLoad>
        </div>
        <div className="my-6 lg:my-0 lg:ml-4">
          <SectionContentCard
            blackText="Mój salon ma na celu dostarczenie najlepszych doświadczeń w projektowaniu paznokci i najwyższej jakości obsługi klienta."
            grayText="Korzystam z całkowicie naturalnych, organicznych produktów do ciała, trudno dostępnych polskich marek i kolorów. Mam również najlepszą kawę w mieście."
            mainTitle
            title="Dlaczego klienci mnie wybierają?"
          />
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default WhyMe;
