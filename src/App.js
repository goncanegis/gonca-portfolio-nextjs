import { useEffect } from 'react';
import AOS from 'aos';
import { Navbar } from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <header>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </>
  );
}

export default App;
