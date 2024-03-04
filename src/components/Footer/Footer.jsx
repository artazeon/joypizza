import React from 'react';
import { FooterDesktop } from './FooterDesktop/FooterDesktop';
import { FooterMobile } from './FooterMobile/FooterMobile';
// import './Footer.scss';

export const Footer = ({ template }) => {
  switch (template) {
    case 'desktop':
      return <FooterDesktop />;

    default:
      return <FooterMobile />;
  }
};
