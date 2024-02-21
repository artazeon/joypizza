import React from 'react';

import './OrderPhone.scss';

const blockClass = 'order-phone';

export const OrderPhone = (className, mod) => {
  return (
    <a href="tel:+375293331933" className={`${blockClass}__number`}>
      +375 29 333-19-33
    </a>
  );
};
