import React from 'react';

const Services = () => {
  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:my-24">
      <div className="my-6 md:my-0">
        <img alt="Ikona manicure" className="mx-auto" src="/manicure.png" />
        <h4 className="titleNormalFont text-center">Manicure</h4>
      </div>
      <div className="my-6 md:my-0">
        <img alt="Ikona manicure" className="mx-auto" src="/pedicure.png" />
        <h4 className="titleNormalFont text-center">Pedicure</h4>
      </div>
      <div className="my-6 md:my-0">
        <img alt="Ikona manicure" className="mx-auto" src="/nail-polish.png" />
        <h4 className="titleNormalFont text-center">
          Sztuka zdobienia paznokci
        </h4>
      </div>
      <div className="my-6 md:my-0">
        <img alt="Ikona manicure" className="mx-auto" src="/eyebrow.png" />
        <h4 className="titleNormalFont text-center">Stylizacja brwi</h4>
      </div>
    </section>
  );
};

export default Services;
