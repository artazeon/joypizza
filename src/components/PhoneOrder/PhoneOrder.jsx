import React from 'react';

import './PhoneOrder.scss';

const mainClass = 'header__social';

export const PhoneOrder = (className, mod) => {
  return (
    <div className="header__phone">
      <a href="tel:+375293331933" className="header__phone-number">
        +375 (29) 333-19-33
      </a>
    </div>
  );
};
