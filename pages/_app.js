import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import theme from '../theme';
import { useEffect } from 'react';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Gonca Negis</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
