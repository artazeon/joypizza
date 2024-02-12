import React, { ReactElement } from 'react';
import { Basket } from '../../Basket/Basket';
import { IChildren } from '../Interfaces';

export const BasketLayout = ({ children }: IChildren) => (
  <div className="layout-basket">
    <div className="layout-content">{children}</div>
    <Basket />
  </div>
);
