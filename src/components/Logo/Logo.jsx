import React from 'react';
import classNames from 'classnames';
import './Logo.scss';
import { Img } from '../Img/Img';

const mainClass = 'logo';

export const Logo = ({ className = '', mod }) => {
  return (
    <>
      <div
        className={classNames(className, mainClass, {
          [`${mainClass}--${mod}`]: mod,
        })}
      >
        <a href="/" className="logo__link">
          <Img
            lazy
            src="/images/svg/logo.svg"
            className={`${mainClass}__link-image`}
            alt="logo"
          />
        </a>
      </div>
    </>
  );
};
