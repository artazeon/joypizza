import React from 'react';
import { IImg } from './types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Img = ({ lazy = false, ...rest }: IImg) => (
  <LazyLoadImage visibleByDefault={!lazy} {...rest} />
);
