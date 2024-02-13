import React from 'react';
import { IChildren } from '@interfaces/Interfaces';
import { DefaultLayout } from './DefaultLayout/DefaultLayout';
import { BasketLayout } from './BasketLayout/BasketLayout';

interface ILayout extends IChildren {
  template?: 'default' | 'basket';
}

export const Layout = ({ template = 'default', children }: ILayout) => {
  switch (template) {
    case 'basket':
      return <BasketLayout children={children} />;

    default:
      return <DefaultLayout children={children} />;
  }
};

// import React from 'react';
// import { IChildren } from './Interfaces';
// import { Basket } from '../Basket/Basket';

// interface ILayout extends IChildren {
//   template?: 'default' | 'basket';
// }

// export const Layout = ({ template = 'default', children }: ILayout) => (
//   <>
//     {template === 'basket' && (
//       <div className="layout-basket">
//         <div className="layout-content">{children}</div>
//         <Basket />
//       </div>
//     )}

//     {template === 'default' && <div className="layout-content">{children}</div>}
//   </>
// );
