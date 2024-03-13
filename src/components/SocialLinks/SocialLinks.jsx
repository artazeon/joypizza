import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import './SocialLinks.scss';

const mainClass = 'social-link';

export const SocialLinks = ({ className, mod }) => {
  return (
    <div
      className={classNames(className, mainClass, {
        [`${mainClass}--${mod}`]: mod,
      })}
    >
      <a href="/" className={`${mainClass}__item`}>
        <Icon name="vk-logo" size="20" className={`${mainClass}__item-image`} />
      </a>
      <a href="/" className={`${mainClass}__item`}>
        <Icon
          name="instagram-logo"
          size="20"
          className={`${mainClass}__item-image`}
        />
      </a>
      <a href="/" className={`${mainClass}__item`}>
        <Icon
          name="facebook-logo"
          size="20"
          className={`${mainClass}__item-image`}
        />
      </a>
      <a href="/" className={`${mainClass}__item`}>
        <Icon
          name="tiktok-logo"
          size="20"
          className={`${mainClass}__item-image`}
        />
      </a>
    </div>
  );
};
