import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CircleIndicator } from './components/CircleIndicator';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <CircleIndicator />
    </ChakraProvider>
  );
}

export default App;
