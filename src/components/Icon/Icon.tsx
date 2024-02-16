/*
 * Source:
 * https://github.com/alexanderson1993/svg-icons-cli
 * To update icons - add new terminal and run script 'npm run build:icons'
 */

import React, { type SVGProps } from 'react';
import svgSprite from '../../icons-sprite/sprite.svg';
import { type IconName } from '../../icons-sprite/name';

interface IIcon extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 24, className = '', ...rest }: IIcon) => (
  <svg
    className={`icon icon-${name}${className ? ` ${className}` : ''}`}
    width={size}
    height={size}
    {...rest}
  >
    <use xlinkHref={`${svgSprite}#${name}`} />
  </svg>
);
