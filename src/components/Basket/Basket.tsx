import React, { useEffect, useState } from 'react';
import { Img } from '../Img/Img';
import { Icon } from '../Icon/Icon';
import { IBasket, IBasketCard } from './types';
import basketListJSON from './basketList.json';
import basketExtraListJSON from './basketExtraList.json';
import './Basket.scss';

const getFixedDecimalNumber = (number: number, decimal: number = 2): string =>
  (Math.round(number * 100) / 100).toFixed(decimal);

export const Basket = () => {
  const [basketState, setBasketState] = useState<IBasket>({
    basketList: basketListJSON as IBasketCard[],
    basketExtraList: basketExtraListJSON as IBasketCard[],
  });
  const { basketList, basketExtraList } = basketState;

  const removeBasketListItem = (productId: string): void => {
    const targetItem: IBasketCard | undefined = basketList.find(
      ({ id }) => id === productId,
    );

    setBasketState({
      basketList: basketList.filter(({ id }) => id !== productId),
      basketExtraList: targetItem?.extra
        ? [...basketExtraList, targetItem]
        : [...basketExtraList],
    });
  };

  const updateBasketListItemAmount = (
    productId: string,
    newAmount: number | string,
  ) =>
    setBasketState({
      ...basketState,
      basketList: basketList.map((item) =>
        item.id === productId ? { ...item, amount: +newAmount } : item,
      ),
    });

  const addBasketExtraListItem = (targetId: string, amount: number = 1) => {
    const newItem: IBasketCard | undefined = basketExtraList.find(
      ({ id }) => id === targetId,
    );

    if (newItem) {
      setBasketState({
        basketList: [...basketList, { ...newItem, amount: amount }],
        basketExtraList: basketExtraList.filter(({ id }) => id !== targetId),
      });
    }
  };

  useEffect(
    () =>
      setBasketState({
        ...basketState,
        basketExtraList: basketExtraList.filter(
          (item) => !basketList.find(({ id }) => item.id === id),
        ),
      }),
    [],
  );

  return (
    <div className="basket">
      <div className="basket-head">
        <span className="basket-head__title">Корзина</span>
        {basketList.length > 0 && (
          <button
            className="basket-head__button"
            onClick={() =>
              setBasketState({
                basketList: [],
                basketExtraList: [...basketExtraList],
              })
            }
          >
            Очистить всю
          </button>
        )}
      </div>
      <div className="basket-body">
        {basketList.length === 0 ? (
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
        ) : (
          <div className="basket-order">
            <ul className="basket-order__list">
              {basketList.map(
                ({ id, link, image, title, info, price, currency, amount }) => (
                  <li key={id} className="basket-order__item">
                    <div className="basket-card">
                      <div className="basket-card__head">
                        <a href={link} className="basket-card__link">
                          <Img lazy src={image} className="basket-card__img" />
                        </a>
                        <button
                          className="basket-card__remove"
                          onClick={() => removeBasketListItem(id)}
                        >
                          <Icon
                            name="icon-cross"
                            classNames={['basket-card__remove-icon']}
                          />
                        </button>
                      </div>
                      <div className="basket-card__body">
                        <div className="basket-card__title">{title}</div>
                        {info && (
                          <div className="basket-card__info">{info}</div>
                        )}
                      </div>
                      <div className="basket-card__footer">
                        <div className="basket-counter">
                          <button
                            className="basket-counter__button"
                            disabled={amount <= 1}
                            onClick={() => {
                              updateBasketListItemAmount(id, amount - 1);
                            }}
                          >
                            <Icon
                              name="icon-minus"
                              classNames={['basket-counter__button-icon']}
                            />
                          </button>
                          <input
                            type="number"
                            className="basket-counter__input"
                            step={1}
                            min={1}
                            max={99}
                            value={amount}
                            onChange={(e) =>
                              updateBasketListItemAmount(id, e.target.value)
                            }
                          />
                          <button
                            className="basket-counter__button"
                            disabled={amount >= 99}
                            onClick={() => {
                              updateBasketListItemAmount(id, amount + 1);
                            }}
                          >
                            <Icon
                              name="icon-plus"
                              classNames={['basket-counter__button-icon']}
                            />
                          </button>
                        </div>
                        <span className="basket-card__price">
                          {getFixedDecimalNumber(price)} {currency}
                        </span>
                      </div>
                    </div>
                  </li>
                ),
              )}
            </ul>
            <div className="basket-order__footer">
              {basketExtraList.length !== 0 && (
                <div className="basket-extra">
                  <span className="basket-extra__title">
                    Добавить к заказу?
                  </span>
                  <ul className="basket-extra__list">
                    {basketExtraList.map(
                      ({ id, link, image, title, price, currency }) => (
                        <li key={id} className="basket-extra__list-item">
                          <div className="basket-extra__card">
                            <a href={link} className="basket-extra__card-link">
                              <Img
                                lazy
                                src={image}
                                className="basket-extra__card-img"
                              />
                              <span className="basket-extra__card-title">
                                {title}
                              </span>
                              <span className="basket-extra__card-price">
                                {price} {currency}
                              </span>
                            </a>
                            <button
                              className="basket-extra__card-add"
                              onClick={() => addBasketExtraListItem(id)}
                            >
                              <Icon
                                name="icon-plus"
                                classNames={['basket-extra__card-add-icon']}
                              />
                            </button>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              <div className="basket-amount">
                <span className="basket-amount__title">
                  Итоговая сумма заказа
                </span>
                <span className="basket-amount__value">{`${getFixedDecimalNumber(
                  basketList.reduce(
                    (sum, { price, amount }) => sum + price * amount,
                    0,
                  ),
                )} BYN`}</span>
                <button className="basket-amount__button">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
