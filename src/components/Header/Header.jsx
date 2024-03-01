import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { OrderPhone } from '../OrderPhone/OrderPhone';
import { OrderTime } from '../OrderTime/OrderTime';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Account } from '../Account/Account';
import headerMenuList from '../../data/header-menu-list.json';
import './Header.scss';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isDesktope = window.innerWidth > 1300;

  const handleBurgerClick = () => {
    setIsOpened(!isOpened);
    !isOpened
      ? document.body.classList.add('_overflow')
      : document.body.classList.remove('_overflow');
  };

  const burgerLines = Array.from({ length: 4 }, (el, index) => (
    <span key={index} className="header__burger-line"></span>
  ));

  return (
    <header className="header">
      <div className="header__inner">
        <Logo className="header__logo" />
        <OrderPhone className="header__order-phone" />
        {isDesktope && (
          <>
            <OrderTime className="header__order-time" />
            <SocialLinks className="header__social-link" />
            <Account className="header__account" />
          </>
        )}

        <div
          onClick={handleBurgerClick}
          className={`header__burger ${isOpened ? 'opened' : ''}`}
        >
          {burgerLines}
        </div>
      </div>

      <div className={`header__menu ${isOpened ? 'menu-opened' : ''}`}>
        <nav className="header__menu-list-wrp">
          <ul className="header__menu-items">
            {headerMenuList.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a href="#" className="header__menu-item-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__menu-info">
          <OrderTime className="header__menu-info-order-time" />
          <Account className="header__menu-info-account" />
          <SocialLinks className="header__menu-info-social-link" />
        </div>
      </div>
    </header>
  );
};
