import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import theme from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Head>
          <title>Gonca Negis</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
