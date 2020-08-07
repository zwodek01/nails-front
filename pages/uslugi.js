import React from 'react';
import Layout from '../components/layout/components/layout';
import SectionHero from '../components/common/components/sectionHero';
import WhyMe from '../components/common/components/whyMe';
import SectionContentCard from '../components/common/components/sectionContentCard';
import Services from '../components/pages/home/components/services';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

const Uslugi = () => {
  return (
    <Layout>
      <main>
        <SectionHero title="Usługi" />
        <WhyMe />
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24 lg:flex lg:items-center lg:justify-between">
            <SectionContentCard
              grayText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor finibus nulla at interdum. Fusce posuere pulvinar eleifend. Sed massa diam, euismod eu pulvinar fringilla, tempus quis purus. Praesent aliquam, est et volutpat blandit, augue dui suscipit odio, sed euismod eros quam vitae ipsum."
              title="Moje usługi"
            />
          </section>
        </ScrollAnimation>
        <Services />
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24 lg:flex lg:items-center">
            <div className="text-center">
              <h3 className="titleWithoutBorder">Godziny pracy</h3>
              <div className="my-6">
                <p className="text-2xl">Poniedziałek - Piątek</p>
                <p className="text-base text-gray-600">9.00 - 17.00</p>
              </div>
              <div className="my-6">
                <p className="text-2xl">Sobota</p>
                <p className="text-base text-gray-600">9.00 - 17.00</p>
              </div>
              <div className="my-6">
                <p className="text-2xl">Niedziela</p>
                <p className="text-base text-gray-600">9.00 - 17.00</p>
              </div>
              <p className="text-base text-gray-600 my-6">
                Będzie mi miło widzieć Cię w moim salonie.
              </p>
              <Link href="/rezerwacja-wizyty">
                <a className="font-extrabold">ZRÓB REZERWACJĘ</a>
              </Link>
            </div>
            <LazyLoad offset={200}>
              <img
                alt="Lakiery"
                className="my-6 sm:max-w-md lg:max-w-xs mx-auto xl:max-w-md"
                src="/image-5.webp"
              />
            </LazyLoad>
            <div className="text-center">
              <h3 className="titleWithoutBorder">Cennik</h3>
              <div className="my-6">
                <p className="text-2xl">Manicure</p>
                <p className="text-base text-gray-600">100 zł</p>
              </div>
              <div className="my-6">
                <p className="text-2xl">Pedicure</p>
                <p className="text-base text-gray-600">100 zł</p>
              </div>
              <div className="my-6">
                <p className="text-2xl">Przedłużanie paznokci</p>
                <p className="text-base text-gray-600">100 zł</p>
              </div>
              <div className="my-6">
                <p className="text-2xl">Pedicure żelowy</p>
                <p className="text-base text-gray-600">100 zł</p>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
    </Layout>
  );
};

export default Uslugi;
