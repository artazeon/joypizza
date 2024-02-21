import { ReactElement } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';

export interface IChildren {
  children?: ReactElement | ReactElement[];
}

export interface IImg extends LazyLoadImageProps {
  lazy?: boolean;
}
