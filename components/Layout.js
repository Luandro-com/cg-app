import React from 'react';
import { Provider } from 'react-redux';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import store from '../utils/store';
import '../utils/offline-install';


const Layout = ({ children, footerData, contactData }) => (
  <Provider store={store}>
    <div>
      { children }
      <Contact {...contactData} />
      <Footer {...footerData} />
    </div>
  </Provider>
);

export default Layout;
