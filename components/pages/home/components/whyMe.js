import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';

const WhyMe = () => {
  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:my-24">
      <img
        alt="Zdjęcie paznokci"
        className=" md:block md:max-w-md lg:max-w-lg xl:max-w-2xl"
        src="/image-2.png"
      />
      <div className="my-6 lg:my-0 lg:ml-4">
        <SectionContentCard
          blackText="Mój salon ma na celu dostarczenie najlepszych doświadczeń w projektowaniu paznokci i najwyższej jakości obsługi klienta."
          grayText="Korzystam z całkowicie naturalnych, organicznych produktów do ciała, trudno dostępnych polskich marek i kolorów. Mam również najlepszą kawę w mieście."
          mainTitle
          title="Dlaczego klienci mnie wybierają?"
        />
      </div>
    </section>
  );
};

export default WhyMe;
