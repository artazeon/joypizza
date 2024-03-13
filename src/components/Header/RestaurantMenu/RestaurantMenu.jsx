import React from 'react';
import headerMenuList from '../../../data/header-menu-list.json';
import classNames from 'classnames';
import './RestaurantMenu.scss';

const mainClass = 'restaurant-menu';

export const RestaurantMenu = ({ className = '', mod }) => {
  return (
    <nav
      className={classNames(className, mainClass, {
        [`${mainClass}--${mod}`]: mod,
      })}
    >
      <ul className={`${mainClass}__items`}>
        {headerMenuList.map((item) => (
          <li key={item.id} className={`${mainClass}__item`}>
            <a href="#" className={`${mainClass}__item-link`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
