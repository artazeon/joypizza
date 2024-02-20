import React from 'react';
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
                <div className="footer__menu-order-phone">
                  <a
                    href="tel:+375293331933"
                    className="footer__menu-order-phone-number"
                  >
                    +375 29 333-19-33
                  </a>
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
            </div>
            <div className="footer__link">
              <a href="/" className="footer__link-logo">
                <img
                  src="/images/svg/logo.svg"
                  className="footer__link-logo-image"
                  alt="logo"
                />
              </a>
              <div className="footer__link-social">
                <a href="/" className="footer__link-social-item">
                  <svg
                    className="footer__link-social-item-image"
                    width="20"
                    height="11"
                    viewBox="0 0 20 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5411 0.744847C19.6801 0.315493 19.5411 0 18.8794 0H16.6914C16.135 0 15.8786 0.272539 15.7395 0.573071C15.7395 0.573071 14.6268 3.08477 13.0505 4.71628C12.5406 5.18855 12.3087 5.33882 12.0306 5.33882C11.8915 5.33882 11.6902 5.18855 11.6902 4.75923V0.744849C11.6902 0.229622 11.5287 0 11.0651 0H7.62678C7.27911 0 7.07003 0.239129 7.07003 0.465759C7.07003 0.954182 7.85811 1.06682 7.93935 2.44075V5.42472C7.93935 6.07895 7.81177 6.19756 7.5336 6.19756C6.79186 6.19756 4.98756 3.67464 3.91744 0.787765C3.70773 0.226658 3.49738 0 2.93819 0H0.750181C0.125035 0 0 0.272539 0 0.573071C0 1.10977 0.741783 3.77174 3.45387 7.29237C5.26191 9.69668 7.80932 11 10.1274 11C11.5182 11 11.6902 10.7105 11.6902 10.2119V8.39474C11.6902 7.81579 11.822 7.70025 12.2624 7.70025C12.5869 7.70025 13.1433 7.85051 14.4414 9.00975C15.9249 10.3837 16.1695 11 17.004 11H19.192C19.8171 11 20.1297 10.7105 19.9494 10.1393C19.752 9.56992 19.0437 8.74386 18.1039 7.76464C17.5939 7.2065 16.8289 6.60544 16.5971 6.30484C16.2726 5.91847 16.3653 5.74669 16.5971 5.40325C16.5971 5.40325 19.2629 1.92553 19.5411 0.744847Z"
                      fill="#d32626"
                    />
                  </svg>
                </a>
                <a href="/" className="footer__link-social-item">
                  <svg
                    className="footer__link-social-item-image"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6571 20H3.34292C1.50308 20 0 18.4969 0 16.6571V3.34292C0 1.50308 1.50308 0 3.34292 0H16.6571C18.4969 0 20 1.50308 20 3.34292V16.6571C20 18.5051 18.5051 20 16.6571 20Z"
                      fill="#d32626"
                    />
                    <path
                      d="M10 15C8.664 15 7.408 14.48 6.464 13.536C5.52 12.592 5 11.336 5 10C5 8.664 5.52 7.408 6.464 6.464C7.408 5.52 8.664 5 10 5C11.336 5 12.592 5.52 13.536 6.464C14.48 7.408 15 8.664 15 10C15 11.336 14.48 12.592 13.536 13.536C12.584 14.48 11.336 15 10 15ZM10 6.064C7.832 6.064 6.064 7.824 6.064 10C6.064 12.168 7.824 13.936 10 13.936C12.168 13.936 13.936 12.176 13.936 10C13.928 7.832 12.168 6.064 10 6.064Z"
                      fill="white"
                    />
                    <path
                      d="M16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="/" className="footer__link-social-item">
                  <svg
                    className="footer__link-social-item-image"
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.79559 11.6272V20H3.08371V11.6272H0V8.23225H3.08371V6.99704C3.08371 2.41124 4.93251 0 8.84426 0C10.0435 0 10.3433 0.199704 11 0.362426V3.72041C10.2648 3.58728 10.0578 3.51331 9.29396 3.51331C8.38741 3.51331 7.90201 3.77959 7.45944 4.30473C7.01687 4.82988 6.79559 5.73965 6.79559 7.04142V8.23965H11L9.87216 11.6346H6.79559V11.6272Z"
                      fill="#d32626"
                    />
                  </svg>
                </a>
                <a href="/" className="footer__link-social-item">
                  <svg
                    className="footer__link-social-item-image"
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0075 4.06342C13.8829 3.99714 13.7616 3.92449 13.6441 3.84572C13.3023 3.61317 12.9889 3.33914 12.7107 3.02956C12.0146 2.20983 11.7547 1.37822 11.6589 0.795981H11.6627C11.5827 0.312693 11.6158 0 11.6208 0H8.45036V12.6177C8.45036 12.7872 8.45036 12.9546 8.44344 13.12C8.44344 13.1406 8.44152 13.1596 8.44036 13.1818C8.44036 13.1909 8.44036 13.2004 8.43844 13.2099V13.217C8.40502 13.6697 8.26402 14.1071 8.02783 14.4905C7.79165 14.874 7.46752 15.1919 7.08396 15.4161C6.68421 15.6502 6.23208 15.773 5.77217 15.7724C4.295 15.7724 3.09781 14.5327 3.09781 13.0017C3.09781 11.4707 4.295 10.231 5.77217 10.231C6.05179 10.2307 6.32968 10.276 6.59555 10.3652L6.59939 7.04271C5.7923 6.93541 4.97237 7.00143 4.19131 7.2366C3.41025 7.47176 2.68502 7.87098 2.06138 8.40906C1.51492 8.89773 1.05551 9.4808 0.70382 10.132C0.569987 10.3695 0.0650366 11.3238 0.00388879 12.8726C-0.0345689 13.7518 0.221944 14.6625 0.34424 15.0389V15.0469C0.421155 15.2685 0.719203 16.0249 1.20492 16.6626C1.59659 17.1741 2.05933 17.6234 2.57825 17.9961V17.9881L2.58594 17.9961C4.12079 19.0695 5.82255 18.9991 5.82255 18.9991C6.11713 18.9868 7.10396 18.9991 8.22462 18.4524C9.46757 17.8464 10.1752 16.9436 10.1752 16.9436C10.6273 16.4041 10.9867 15.7893 11.2382 15.1256C11.5251 14.3494 11.6208 13.4185 11.6208 13.0464V6.35241C11.6593 6.37616 12.1715 6.72487 12.1715 6.72487C12.1715 6.72487 12.9095 7.21172 14.061 7.52877C14.887 7.75438 16 7.80188 16 7.80188V4.56254C15.61 4.60608 14.8182 4.47942 14.0075 4.06342Z"
                      fill="#d32626"
                    />
                  </svg>
                </a>
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
