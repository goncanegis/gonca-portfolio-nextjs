import { Navbar } from './Navbar';
import { CircleIndicator } from './CircleIndicator';

import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CircleIndicator />
    </>
  );
}

export default Layout;
