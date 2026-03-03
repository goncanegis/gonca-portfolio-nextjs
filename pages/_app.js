import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import theme from '../theme';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
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
