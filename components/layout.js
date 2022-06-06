import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { CircleIndicator } from './CircleIndicator';

import Footer from './Footer';

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CircleIndicator />
    </ChakraProvider>
  );
}

export default Layout;
