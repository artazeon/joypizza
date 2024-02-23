import React from 'react';
import classNames from 'classnames';
import './Account.scss';

const mainClass = 'account';

export const Account = ({ className, mod }) => {
  return (
    <>
      <div
        className={classNames(className, mainClass, {
          [`${mainClass}--${mod}`]: mod,
        })}
      >
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
      </div>
    </>
  );
};
