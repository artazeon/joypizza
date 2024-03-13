import React from 'react';
import { FooterDesktop } from './FooterDesktop/FooterDesktop';
import { FooterMobile } from './FooterMobile/FooterMobile';

export const Footer = ({ template }) => {
  switch (template) {
    case 'desktop':
      return <FooterDesktop />;

    default:
      return <FooterMobile />;
  }
};
