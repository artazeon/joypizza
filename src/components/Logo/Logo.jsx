import React from 'react';

import './Logo.scss';

const blockClass = 'logo';

export const Logo = (className, mod) => {
  return (
    <>
      <a href="/" className="logo">
        <img src="/images/svg/logo.svg" className="logo__image" alt="logo" />
      </a>
    </>
  );
};
