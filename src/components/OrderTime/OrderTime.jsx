import React from 'react';

import './OrderTime.scss';

const blockClass = 'order-time';

export const OrderTime = (className, mod) => {
  return (
    <>
      <div className={`${blockClass}-info`}>Прём заказов:</div>
      <div className={`${blockClass}-clock`}>
        <div className={`${blockClass}-short`}>
          <span>вс-чт</span>
          <span className={`${blockClass}-long_bold`}>
            <b>10:20-22:30</b>
          </span>
        </div>
        <div className={`${blockClass}-long`}>
          <span>пт-сб</span>
          <span className={`${blockClass}-long_bold`}>
            <b>10:00-23:00</b>
          </span>
        </div>
      </div>
    </>
  );
};
