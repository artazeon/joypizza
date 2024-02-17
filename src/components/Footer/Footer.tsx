import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__menu">
        <div className="footer__menu-company"></div>
        <div className="footer__menu-order"></div>
      </div>
      <div className="footer__link">
        <a href="/" className="footer__logo">
          <img
            src="/images/svg/logo.svg"
            className="footer__logo-image"
            alt="logo"
          />
        </a>
        <div className="footer__social"></div>
      </div>
      <div className="footer__app">
        <div className="footer__app-title">
          Скачайте наше мобильное приложение и совершайте быстрые заказы
        </div>
        <div className="footer__app-text">
          После скачивания приложения пройдите небольшую регистрацию, совершайте
          покупки и накапливайте баллы
        </div>
        <div className="footer__app-download">
          <div className="footer__app-google-play"></div>
          <div className="footer__app-app-store"></div>
        </div>
        <div className="footer__payment">
          <div className="footer__payment-title">Способы оплаты</div>
          <div className="footer__payment-logo"></div>
        </div>
        <div className="footer__text">
          <div className="footer__text-requisites"></div>
          <div className="footer__text-copyright">
            2023 © ООО «ДжойСтрит». Использование материалов сайта только с
            разрешения владельца
          </div>
          <div className="footer__text-link">Договор публичной оферты</div>
          <div className="footer__text-link">Политика конфиденциальности</div>
          <div className="footer__text-link">Политика обработки данных</div>
        </div>
      </div>
    </div>
  );
};
