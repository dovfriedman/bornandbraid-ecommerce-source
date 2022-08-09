import '../styles/globals.css';
import UserProvider from '../context/user';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}

export default MyApp;
