import { ReactElement } from 'react';
import { type IconName } from 'src/components/Icon/icons-sprite/name';

export interface IChildren {
  children?: ReactElement | ReactElement[];
}

export interface IIcon {
  name: IconName;
  size?: number;
  classNames?: string[];
}
