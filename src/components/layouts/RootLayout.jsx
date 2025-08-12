import React from 'react';

import Footer from '../pages/Footer';
import {Outlet} from "react-router-dom";
import Header from './Header';

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout;
