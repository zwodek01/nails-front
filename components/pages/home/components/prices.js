import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import { prices } from '../../../../data/prices';
import Button from '../../../common/components/button';
import ScrollAnimation from 'react-animate-on-scroll';

const Prices = () => {
  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24">
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
        <SectionContentCard
          blackText="Oferuję szeroką gamę niedrogich zabiegów paznokci i skóry. Poniżej możesz dowiedzieć się więcej o przedziale cenowym moich usług."
          title="Cennik"
        />
      </ScrollAnimation>

      <div className="xs:grid xs:grid-cols-2 xs:gap-8 lg:grid-cols-3">
        {prices.map(price => (
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            delay={price.id}
            key={price.id}
          >
            <div className="flex justify-between items-center border-bottom-gray pb-2 my-12">
              <div>
                <p className="text-black xs:text-lg md:text-xl">{price.name}</p>
                <p className="text-gray-600">{price.hours}</p>
              </div>
              <p className="text-black xs:text-lg md:text-xl">{price.price}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="flex justify-center">
          <Button label="Zobacz więcej" />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Prices;
