import React from 'react';
import { Logo } from '../Logo/Logo';
import { OrderPhone } from '../OrderPhone/OrderPhone';
import { SocialLinks } from '../SocialLinks/SocialLinks';

import './Footer.scss';

export const Footer = ({ template }) => {
  switch (template) {
    case 'desktop':
      return <h2>А тут будет десктопный футер</h2>;

    default:
      return (
        <div className="footer">
          <div className="footer__inner">
            <div className="footer__menu">
              <div className="footer__menu-company">
                <div className="footer__menu-company-title">Компания</div>
                <ul className="footer__menu-company-items">
                  <li className="footer__menu-company-item">Контакты</li>
                  <li className="footer__menu-company-item">
                    Доставка и оплата
                  </li>
                  <li className="footer__menu-company-item">
                    Отзывы и предложения
                  </li>
                  <li className="footer__menu-company-item">Вакансии</li>
                  <li className="footer__menu-company-item">Карта сайта</li>
                </ul>
              </div>
              <div className="footer__menu-order">
                <div className="footer__menu-order-title">
                  Контакты для заказа
                </div>
                <div className="footer__phone-order">
                  <OrderPhone mod="big-size" />
                </div>

                <div className="footer__menu-order-time-clock">
                  Прием заказов с 10:20 до 22:20
                </div>
                <div className="footer__menu-order-adress">
                  г. Гомель, ул. Свиридова 15-4
                </div>
                <div className="footer__menu-order-adress">
                  г. Гомель, ул. Карбышева 9
                </div>
              </div>
            </div>
            <div className="footer__link">
              <a href="/" className="footer__link-logo logo logo--small">
                <Logo />
              </a>

              <div className="footer__link-social social-link social-link--red">
                <SocialLinks />
              </div>
            </div>
            <div className="footer__app">
              <div className="footer__app-title">
                Скачайте наше мобильное приложение и совершайте быстрые заказы
              </div>
              <div className="footer__app-text">
                После скачивания приложения пройдите небольшую регистрацию,
                совершайте покупки и накапливайте баллы
              </div>
              <div className="footer__app-download">
                <a href="#" className="footer__app-download-btn">
                  <svg
                    className="footer__app-download-btn-image"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.1628 5.93789L8.88927 4.31289L1.20886 0.0953878C1.09626 0.0340671 0.976842 0.00681342 0.857422 0L7.1628 5.93789Z" />
                    <path d="M0.10236 0.415466C0.037532 0.531294 0 0.660749 0 0.807238V12.1925C0 12.3389 0.040944 12.4718 0.10236 12.5842L6.56127 6.49985L0.10236 0.415466Z" />
                    <path d="M11.5778 5.78457L9.64319 4.72168L7.75977 6.49657L9.64319 8.27147L11.5778 7.20858C12.1408 6.89857 12.1408 6.09118 11.5778 5.78117V5.78457Z" />
                    <path d="M7.1628 7.06195L0.857422 12.9998C0.97343 12.993 1.09285 12.9692 1.20886 12.9045L8.88927 8.69036L7.1628 7.06536V7.06195Z" />
                  </svg>

                  <div className="footer__app-download-btn-text">
                    Скачать в Google Play
                  </div>
                </a>
                <a href="#" className="footer__app-download-btn">
                  <svg
                    className="footer__app-download-btn-image"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.58221 3.73533C5.06871 3.73533 4.27409 3.15142 3.43721 3.172C2.33221 3.18662 1.31929 3.81279 0.750002 4.80458C-0.396707 6.79521 0.454252 9.73537 1.57279 11.3533C2.1215 12.1409 2.76879 13.0271 3.62679 12.9995C4.45013 12.9642 4.75888 12.4648 5.75825 12.4648C6.75004 12.4648 7.03117 12.9995 7.90325 12.9783C8.78996 12.9642 9.35275 12.1767 9.89442 11.3815C10.5206 10.4672 10.7806 9.58046 10.7947 9.53171C10.7735 9.52467 9.07109 8.87033 9.0505 6.90083C9.03642 5.25417 10.3938 4.46658 10.4572 4.43137C9.68317 3.29929 8.49475 3.17254 8.07929 3.14437C6.99596 3.05987 6.08867 3.73479 5.58221 3.73479V3.73533ZM7.41196 2.07458C7.86859 1.52642 8.17029 0.759958 8.08634 0C7.43254 0.0281667 6.64442 0.436042 6.17317 0.98475C5.75067 1.47008 5.38559 2.25117 5.48363 2.9965C6.20838 3.05283 6.95425 2.62383 7.41142 2.07512" />
                  </svg>

                  <div className="footer__app-download-btn-text">
                    Скачать в App Store
                  </div>
                </a>
              </div>
              <div className="footer__payment">
                <div className="footer__payment-title">Способы оплаты</div>
                <div className="footer__payment-logos">
                  <img
                    src="/images/svg/payment/visa.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/visa-seq.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/alfa.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/mc.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/mc2.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/belcard.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                  <img
                    src="/images/svg/payment/belcard2.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />

                  <img
                    src="/images/svg/payment/apple-pay.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />

                  <img
                    src="/images/svg/payment/samsung-pay.svg"
                    className="footer__payment-logos-item"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="footer__text">
                <div className="footer__text-requisites">
                  Название компании: ООО «ДжойСтрит», УНП: 491344187, р/с: BY88
                  ALFA 3012 2A16 1400 1027 0000, ALFABY2X, адрес: Республика
                  Беларусь, г. Гомель, ул. Свиридова 15-4, приём заказов: +375
                  25 515-36-96, +375 33 333-17-16, ЗАО «Альфа-Банк», адрес: Ул.
                  Сурганова, 43-47, 220013 Минск, телефон: +375 33 666-34-66,
                  email: 375336663466@mail.ru, свидетельство о государственной
                  регистрации: № 491344187 от 27.05.2021, выданный гомельским
                  городским исполнительным комитетом.
                </div>
                <div className="footer__text-copyright">
                  2023 © ООО «ДжойСтрит». Использование материалов сайта только
                  с разрешения владельца
                </div>

                <div className="footer__text-link">
                  <a href="#" className="footer__text-link-item">
                    Договор публичной оферты
                  </a>
                  <a href="#" className="footer__text-link-item">
                    Политика конфиденциальности
                  </a>
                  <a href="#" className="footer__text-link-item">
                    Политика обработки данных
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
