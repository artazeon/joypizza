import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
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
        <a href="/" className={`${mainClass}__login`}>
          Войти
        </a>
        <a href="/" className={`${mainClass}__basket`}>
          <Icon name="basket-logo" className={`${mainClass}__basket-image`} />
          {/* <img
            src="/images/svg/basket-logo.svg"
            className="account__basket-image"
            alt="logo"
          /> */}
          <div className={`${mainClass}__basket-text`}>
            <span className={`${mainClass}__basket-text_bold`}>
              <b>00,00 BYN</b>
            </span>
            <span>товаров: 0</span>
          </div>
        </a>
      </div>
    </>
  );
};
