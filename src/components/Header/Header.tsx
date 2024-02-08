import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <>
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img
            src="/images/svg/logo.svg"
            className="header__logo-image"
            alt="logo"
          />
        </div>
        <div className="header__info">
          <div className="header__phone">
            <a href="tel:+375293331933" className="header__phone-number">
              +375 (29) 333-19-33
            </a>
          </div>
          <div className="header__order-time">
            <div className="header__order-time-info">Прём заказов:</div>
            <div className="header__order-time-clock">
              <div className="header__order-time-short">
                <span>вс-чт</span>
                <span>
                  <b>10:20-22:30</b>
                </span>
              </div>
              <div className="header__order-time-long">
                <span>пт-сб</span>
                <span>
                  <b>10:00-23:00</b>
                </span>
              </div>
            </div>
          </div>
          <div className="header__social">
            <a href="/" className="header__social-item">
              <img
                src="/images/svg/vk-logo.svg"
                className="header__social-item-image"
                alt="logo"
              />
            </a>
            <a href="/" className="header__social-item">
              <img
                src="/images/svg/instagram-logo.svg"
                className="header__social-item-image"
                alt="logo"
              />
            </a>
            <a href="/" className="header__social-item">
              <img
                src="/images/svg/facebook-logo.svg"
                className="header__social-item-image"
                alt="logo"
              />
            </a>
            <a href="/" className="header__social-item">
              <img
                src="/images/svg/tiktok-logo.svg"
                className="header__social-item-image"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="header__sign">
          <div className="header__sign-login">Войти</div>
          <div className="header__sign-basket">
            <img
              src="/images/svg/basket-logo.svg"
              className="header__sign-basket-image"
              alt="logo"
            />
            <span>
              <b>00,00 BYN</b>
            </span>
            <span>товаров: 0</span>
          </div>
        </div>
      </div>
    </header>

    <p>Welcom to Joy Pizza React App</p>
    <Link to="/">Home page</Link>
    <Link to="/catalog">Catalog page</Link>
    <Link to="/catalog/card">Card page</Link>
    <Link to="/cart">Cart page</Link>
    <Link to="/404">404 page</Link>
  </>
);

export default Header;
