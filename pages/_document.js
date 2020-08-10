import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Vollkorn"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script src="path/to/intersection-observer.js"></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
