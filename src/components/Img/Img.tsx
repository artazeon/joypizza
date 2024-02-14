import React from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';

interface IImg extends LazyLoadImageProps {
  lazy?: boolean;
}

export const Img = ({ lazy = false, ...rest }: IImg) => (
  <LazyLoadImage visibleByDefault={!lazy} {...rest} />
);
