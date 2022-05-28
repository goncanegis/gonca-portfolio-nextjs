import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CircleIndicator } from './components/CircleIndicator';
import { AboutMeSection } from './sections/AboutMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <Footer />
      <CircleIndicator />
    </ChakraProvider>
  );
}

export default App;
