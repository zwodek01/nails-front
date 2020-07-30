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
