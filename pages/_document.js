import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#222222" />
        <meta
          name="description"
          content="Personal portfolio of Gonca Negis, a front-end developer based in Izmir, Turkey."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="preload" as="image" href="/images/scene.svg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/woman.svg" fetchPriority="high" />
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('load',function(){var l=document.createElement('link');l.rel='manifest';l.href='/site.webmanifest';document.head.appendChild(l)})` }} />
      </body>
    </Html>
  );
}
