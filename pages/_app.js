import '../styles/sass/style.scss';
import SimpleReactLightbox from 'simple-react-lightbox';

export default function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
