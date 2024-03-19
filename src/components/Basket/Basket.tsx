import React from 'react';
import { Img } from '../Img/Img';
import './Basket.scss';
import { Icon } from '../Icon/Icon';

export const Basket = () => {
  return (
    <div className="basket">
      <div className="basket-head">
        <span className="basket-head__title">Корзина</span>
        <button className="basket-head__button">Очистить всю</button>
      </div>
      <div className="basket-body">
        <div className="basket-placeholder">
          <Img
            src="../../images/basket-placeholder.png"
            className="basket-placeholder__img"
          />
          <span className="basket-placeholder__text">
            Пока что Ваша корзина пуста. Добавленные Вами блюда будут
            отображаться здесь!
          </span>
        </div>
        <div className="basket-order">
          <ul className="basket-order__list">
            <li className="basket-order__item">
              <div className="basket-card">
                <div className="basket-card__head">
                  <a href="#" className="basket-card__link">
                    <Img
                      lazy
                      src="../../images/basket-card.png"
                      className="basket-card__img"
                    />
                  </a>
                  <button className="basket-card__remove">
                    <Icon
                      name="icon-cross"
                      classNames={['basket-card__remove-icon']}
                    />
                  </button>
                </div>
                <div className="basket-card__body">
                  <div className="basket-card__title">Бонито</div>
                  <div className="basket-card__data">290г</div>
                </div>
                <div className="basket-card__footer">
                  <div className="basket-counter">
                    <button className="basket-counter__button">
                      <Icon
                        name="icon-minus"
                        classNames={['basket-counter__button-icon']}
                      />
                    </button>
                    <input
                      type="number"
                      className="basket-counter__input"
                      value={2}
                    />
                    <button className="basket-counter__button">
                      <Icon
                        name="icon-plus"
                        classNames={['basket-counter__button-icon']}
                      />
                    </button>
                  </div>
                  <span className="basket-card__price">10.90 BYN</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="basket-order__footer">
            <div className="basket-extra">
              <span className="basket-extra__title">Добавить к заказу?</span>
              <ul className="basket-extra__list">
                <li className="basket-extra__list-item">
                  <div className="basket-extra__card">
                    <a href="#" className="basket-extra__card-link">
                      <Img
                        lazy
                        src="../../images/basket-card-extra.png"
                        className="basket-extra__card-img"
                      />
                      <span className="basket-extra__card-title">
                        Соус сырный
                      </span>
                      <span className="basket-extra__card-price">0.90 BYN</span>
                    </a>
                    <button className="basket-extra__card-add">
                      <Icon
                        name="icon-plus"
                        classNames={['basket-extra__card-add-icon']}
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="basket-amount">
              <span className="basket-amount__title">
                Итоговая сумма заказа
              </span>
              <span className="basket-amount__value">48.60 BYN</span>
              <button className="basket-amount__button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
