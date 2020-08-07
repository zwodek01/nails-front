import React from 'react';
import SectionHero from '../components/common/components/sectionHero';
import Layout from '../components/layout/components/layout';
import SectionContentCard from '../components/common/components/sectionContentCard';
import Hours from '../components/common/components/hours';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

const oMnie = () => {
  return (
    <>
      <Layout>
        <main>
          <SectionHero title="O mnie" />
          <ScrollAnimation animateIn="fadeIn" animateOnce >
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
                    src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/image-3.png?alt=media&token=d9fcdc24-7e3e-429f-aa53-36764c5b4989"
                  />
                </LazyLoad>
                <LazyLoad offset={200}>
                  <img
                    alt="Lakiery"
                    className="sm:max-w-md mx-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/test-86c5c.appspot.com/o/image-4.png?alt=media&token=c3e86fcc-8676-4f69-a0cc-8ea0e455d92a"
                  />
                </LazyLoad>
              </div>
            </section>
          </ScrollAnimation>
          <Hours />
        </main>
      </Layout>
    </>
  );
};

export default oMnie;
