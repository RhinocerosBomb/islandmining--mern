import {Link} from 'react-router-dom'
import React, {useEffect} from 'react';

import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import NavBar from './NavBar';
import TokenOfferingDetails from './TokenOfferingDetails';
import Roadmap from './Roadmap';
import Team from './Team';

import '../../assets/vendors/liquid-icon/liquid-icon.min.css';
import '../../assets/vendors/font-awesome/css/font-awesome.min.css';
import '../../assets/theme-vendors.min.css';
import '../../assets/vendors/theme.min.css';
import '../../assets/vendors/themes/seo.css';
import './home.css';

export default function() {
  useEffect(() => {
  }, []);

  return (
    <div data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left" data-mobile-nav-style="modern"
         data-mobile-nav-shceme="gray" data-mobile-header-scheme="gray" data-mobile-nav-breakpoint="1199">
      <div id="wrap">
        <Header/>
        <Body/>
      </div>
      <NavBar />
      <TokenOfferingDetails />
      <Roadmap />
      <Team />
      <Footer/>
    </div>
  );
}
