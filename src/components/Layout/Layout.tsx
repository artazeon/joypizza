import React from 'react';
import DefaultLayout from './DefaultLayout/DefaultLayout';
import BasketLayout from './BasketLayout/BasketLayout';

interface ILayout {
  template?: 'default' | 'basket';
}

const Layout = ({ template }: ILayout) => {
  switch (template) {
    case 'basket':
      return <BasketLayout />;

    default:
      return <DefaultLayout />;
  }
};

Layout.defaultProps = {
  template: 'default',
};

export default Layout;

// import React, { ReactElement } from 'react';
// import Basket from '../Basket/Basket';

// interface ILayout {
//   template?: 'default' | 'basket';
//   children: ReactElement | ReactElement[];
// }

// const Layout = ({ template, children }: ILayout) => (
//   <>
//     {template === 'basket' && (
//       <div className="layout-basket">
//         <div className="layout-content">{children}</div>
//         <Basket />
//       </div>
//     )}

//     {template === 'default' && (
//       <div className="layout-content">D{children}</div>
//     )}
//   </>
// );

// Layout.defaultProps = {
//   template: 'default',
// };

// export default Layout;
