import React from 'react';
import classNames from 'classnames';
import './OrderPhone.scss';

const mainClass = 'order-phone';

export const OrderPhone = ({ className = '', mod }) => {
  return (
    <div
      className={classNames(mainClass, className, {
        [`${mainClass}--${mod}`]: mod,
      })}
    >
      <a href="tel:+375293331933" className={`${mainClass}__number`}>
        +375 29 333-19-33
      </a>
    </div>
  );
};
