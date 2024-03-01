import React from 'react';
import { Logo } from '../../Logo/Logo';
import { OrderPhone } from '../../OrderPhone/OrderPhone';
import { SocialLinks } from '../../SocialLinks/SocialLinks';
import { Img } from '../../Img/Img';
import { Icon } from '../../Icon/Icon';
import footerMenuList from '../../../data/footer-menu-list.json';
import paymentList from '../../../data/payment-list.json';

export const FooterDesktop = () => {
  return (
    <div className="footer-desktop">
      <div className="footer-desktop__inner">
        <div className="footer-desktop__wrp">
          <Logo className="footer-desktop__logo" />
          <div className="footer-desktope__column">
            <div className="footer-desktop__menu">
              <div className="footer-desktop__menu-company">
                <div className="footer-desktop__menu-company-title">
                  Компания
                </div>
                <ul className="footer-desktop__menu-company-items">
                  {footerMenuList.map((item) => (
                    <li
                      key={item.id}
                      className="footer-desktop__menu-company-item"
                    >
                      <a
                        href="#"
                        className="footer-desktop__menu-company-item-link"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <SocialLinks
                  className="footer-desktop__menu-company-social-link"
                  mod="red"
                />
              </div>
              <div className="footer-desktop__menu-order">
                <div className="footer-desktop__menu-order-title">
                  Контакты для заказа
                </div>

                <OrderPhone
                  className="footer-desktop__menu-order-phone-order"
                  mod="narrow-size"
                />

                <div className="footer-desktop__menu-order-time-clock">
                  Прием заказов с 10:20 до 22:20
                </div>
                <div className="footer-desktop__menu-order-order-adress">
                  г. Гомель, ул. Свиридова 15-4
                </div>
                <div className="footer-desktop__menu-order-order-adress">
                  г. Гомель, ул. Карбышева 9
                </div>

                <div className="footer-desktop__menu-order-payment">
                  <div className="footer-desktop__menu-order-payment-title">
                    Способы оплаты
                  </div>
                  <div className="footer-desktop__menu-order-payment-logos">
                    {paymentList.map((el) => {
                      return (
                        <Img
                          lazy
                          key={el.id}
                          src={'images/svg/payment/' + el.name + '.svg'}
                          className="footer-desktop__menu-order-payment-logos-item"
                          alt="logo"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-desktope__column">
            <div className="footer-desktop__app">
              <div className="footer-desktop__app-wrp">
                <div className="footer-desktop__app-title">
                  Скачайте наше мобильное приложение и совершайте быстрые заказы
                </div>
                <div className="footer-desktop__app-text">
                  После скачивания приложения пройдите небольшую регистрацию,
                  совершайте покупки и накапливайте баллы
                </div>
                <div className="footer-desktop__app-download">
                  <a href="#" className="footer-desktop__app-download-btn">
                    <Icon
                      name="google-play"
                      size="20"
                      className="footer-desktop__app-download-btn-image"
                    />

                    <div className="footer-desktop__app-download-btn-text">
                      Скачать в Google Play
                    </div>
                  </a>
                  <a href="#" className="footer-desktop__app-download-btn">
                    <Icon
                      name="app-store"
                      size="20"
                      className="footer-desktop__app-download-btn-image"
                    />

                    <div className="footer-desktop__app-download-btn-text">
                      Скачать в App Store
                    </div>
                  </a>
                </div>
              </div>

              <div className="footer-desktop__app-wrp">
                <Img
                  lazy
                  src="/images/iphone-x.png"
                  className="footer-desktop__app-image"
                  alt="app-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-desktop__text">
          <div className="footer-desktop__text-requisites">
            Название компании: ООО «ДжойСтрит», УНП: 491344187, р/с: BY88 ALFA
            3012 2A16 1400 1027 0000, ALFABY2X, адрес: Республика Беларусь, г.
            Гомель, ул. Свиридова 15-4, приём заказов: +375 25 515-36-96, +375
            33 333-17-16, ЗАО «Альфа-Банк», адрес: Ул. Сурганова, 43-47, 220013
            Минск, телефон: +375 33 666-34-66, email: 375336663466@mail.ru,
            свидетельство о государственной регистрации: № 491344187 от
            27.05.2021, выданный гомельским городским исполнительным комитетом.
          </div>
          <div className="footer-desktop__text-copyright">
            2024 © ООО «ДжойСтрит». Использование материалов сайта только с
            разрешения владельца
          </div>
          <a href="#" className="footer-desktop__text-link-item">
            Договор публичной оферты
          </a>
          <a href="#" className="footer-desktop__text-link-item">
            Политика конфиденциальности
          </a>
          <a href="#" className="footer-desktop__text-link-item">
            Политика обработки данных
          </a>
        </div>
      </div>
    </div>
  );
};
