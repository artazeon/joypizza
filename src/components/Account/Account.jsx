import React from 'react';

import './Account.scss';

const blockClass = 'order-phone';

export const Account = (className, mod) => {
  return (
    <>
      <a href="/" className="account__login">
        Войти
      </a>
      <a href="/" className="account__basket">
        <img
          src="/images/svg/basket-logo.svg"
          className="account__basket-image"
          alt="logo"
        />
        <div className="account__basket-text">
          <span className="account__basket-text_bold">
            <b>00,00 BYN</b>
          </span>
          <span>товаров: 0</span>
        </div>
      </a>
    </>
  );
};
