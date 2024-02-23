import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { OrderPhone } from '../OrderPhone/OrderPhone';
import { OrderTime } from '../OrderTime/OrderTime';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Account } from '../Account/Account';
import menuList from '../../data/menu-list.json';
import './Header.scss';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

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
        <div className="header__logo logo">
          <Logo />
        </div>
        <div className="header__order-phone">
          <OrderPhone />
        </div>

        <div className="header__order-time order-time">
          <OrderTime />
        </div>
        <div className="header__social-link social-link">
          <SocialLinks />
        </div>
        <div className="header__account account">
          <Account />
        </div>

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
            {menuList.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a href="#" className="header__menu-item-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__menu-info">
          <div className="header__order-time order-time">
            <OrderTime />
          </div>
          <div className="header__account account">
            <Account />
          </div>
          <div className="header__social-link social-link">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
};
