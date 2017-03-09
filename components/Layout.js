import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import store from '../utils/store';
import '../utils/offline-install';
import { colors } from '../utils/config';


const Layout = ({ children, footerData, contactData }) => (
  <Provider store={store}>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
        <meta name="theme-color" content={colors.orange} />
        <link rel="manifest" href="static/manifest.json" />
        <title>Todo App</title>
      </Head>
      { children }
      <Contact {...contactData} />
      <Footer {...footerData} />
    </div>
  </Provider>
);

export default Layout;
