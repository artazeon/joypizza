import React from 'react';
import classNames from 'classnames';
import './OrderTime.scss';

const mainClass = 'order-time';

export const OrderTime = ({ className, mod }) => {
  return (
    <>
      <div
        className={classNames(className, mainClass, {
          [`${mainClass}--${mod}`]: mod,
        })}
      >
        <div className={`${mainClass}-info`}>Прём заказов:</div>
        <div className={`${mainClass}-clock`}>
          <div className={`${mainClass}-short`}>
            <span>вс-чт</span>
            <span className={`${mainClass}-long_bold`}>
              <b>10:20-22:30</b>
            </span>
          </div>
          <div className={`${mainClass}-long`}>
            <span>пт-сб</span>
            <span className={`${mainClass}-long_bold`}>
              <b>10:00-23:00</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
