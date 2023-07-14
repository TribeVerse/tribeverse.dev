import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="TribeVerse team!!!" />
        <meta name="image" content="/favicon.png" />
        <meta property="og:title" content="TribeVerse Labs | Free Software" />
        <meta property="og:description" content="TribeVerse team!!!" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="TribeVerse Labs | Free Software" />
        <meta name="twitter:description" content="TribeVerse team!!!" />
        <meta name="twitter:image" content="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
