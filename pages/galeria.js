import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import Layout from '../components/layout/components/layout';
import SectionHero from '../components/common/components/sectionHero';
import { gallery } from '../data/gallery';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

const Galeria = () => {
  const options = {
    settings: {
      overlayColor: '#fff',
      disablePanzoom: true,
      disableWheelControls: true,
      hideControlsAfter: false,
    },
    caption: {
      captionFontFamily: 'Montserrat, sans-serif',
      captionFontSize: '22px',
      captionColor: '#8D99AE',
      captionFontWeight: 300,
      showCaption: true,
    },
    buttons: {
      backgroundColor: '#fff',
      iconColor: '#1F2E4D',
      iconPadding: '5px',
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };

  return (
    <Layout>
      <main>
        <SectionHero title="Galeria" />
        <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24">
          <SRLWrapper options={options}>
            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map(image => (
                <a
                  className="h-full"
                  data-attribute="SRL"
                  href={image.image}
                  key={image.id}
                >
                  <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce
                    className="h-full"
                  >
                    <LazyLoad offset={200}>
                      <img
                        alt={image.name}
                        className="object-cover h-full w-full"
                        src={image.image}
                      />
                    </LazyLoad>
                  </ScrollAnimation>
                </a>
              ))}
            </div>
          </SRLWrapper>
        </section>
      </main>
    </Layout>
  );
};

Galeria.propTypes = {};

export default Galeria;
