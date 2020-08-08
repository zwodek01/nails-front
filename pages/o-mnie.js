import React from 'react';
import SectionHero from '../components/common/components/sectionHero';
import Layout from '../components/layout/components/layout';
import SectionContentCard from '../components/common/components/sectionContentCard';
import Hours from '../components/common/components/hours';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

const oMnie = () => {
  return (
    <Layout>
      <main>
        <SectionHero title="O mnie" />
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section className="px-4 my-12 max-w-screen-xl mx-auto lg:flex lg:items-center lg:justify-between">
            <SectionContentCard
              blackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor finibus nulla at interdum. Fusce posuere pulvinar eleifend. Sed massa diam."
              grayText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor finibus nulla at interdum. Fusce posuere pulvinar eleifend. Sed massa diam, euismod eu pulvinar fringilla, tempus quis purus. Praesent aliquam, est et volutpat blandit, augue dui suscipit odio, sed euismod eros quam vitae ipsum."
              title="Kim jestem"
            />
            <div className="my-12 lg:my-0 lg:ml-6">
              <LazyLoad offset={200}>
                <img
                  alt="Lakiery"
                  className="sm:max-w-md mx-auto"
                  src="/image-3.webp"
                />
              </LazyLoad>
              <LazyLoad offset={200}>
                <img
                  alt="Lakiery"
                  className="sm:max-w-md mx-auto"
                  src="/image-4.webp"
                />
              </LazyLoad>
            </div>
          </section>
        </ScrollAnimation>
        <Hours />
      </main>
    </Layout>
  );
};

export default oMnie;
