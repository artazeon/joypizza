import React from 'react';
import svgSprite from './icons-sprite/sprite.svg';
import { IIcon } from '@interfaces/Interfaces';

export const Icon = ({ name, size = 24, classNames = [], ...rest }: IIcon) => (
  <svg className={`icon icon-${name} ${classNames.join(' ')}`.trim()} {...rest}>
    <use xlinkHref={`${svgSprite}#${name}`} />
  </svg>
);
