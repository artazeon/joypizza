import React, { ReactElement } from 'react';
import { IChildren } from '@interfaces/Interfaces';

export const DefaultLayout = ({ children }: IChildren) => (
  <div className="layout-basket">
    <div className="layout-content">{children}</div>
  </div>
);
