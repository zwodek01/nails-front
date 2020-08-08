import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;700&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/react-toastify@6.0.8/dist/ReactToastify.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/react-loader-spinner@3.1.14/dist/loader/css/react-spinner-loader.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.1.3/react-datepicker.css"
            rel="stylesheet"
          />
          {/*<meta content="/cover.png" property="og:image" />*/}
          {/*<meta*/}
          {/*    content=""*/}
          {/*    property="og:site_name"*/}
          {/*/>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
