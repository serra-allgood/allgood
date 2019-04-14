import React from 'react';
import GlobalStyle from '../styles/global';
import SEO from './SEO';
import 'typeface-cormorant-infant';
import 'typeface-fira-sans';
import 'typeface-fira-mono';

const Layout = () => (
  <React.Fragment>
    <SEO />
    <GlobalStyle />
  </React.Fragment>
);

export default Layout;
