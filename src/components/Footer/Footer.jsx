import React from 'react';
import { FooterDesktop } from './FooterDesktop/FooterDesktop';
import { FooterMobile } from './FooterMobile/FooterMobile';
import { Logo } from '../Logo/Logo';
import { OrderPhone } from '../OrderPhone/OrderPhone';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Img } from '../Img/Img';
import { Icon } from '../Icon/Icon';
import footerMenuList from '../../data/footer-menu-list.json';
import paymentList from '../../data/payment-list.json';

import './Footer.scss';

export const Footer = ({ template }) => {
  switch (template) {
    case 'desktop':
      return <FooterDesktop />;

    default:
      return <FooterMobile />;
  }
};
