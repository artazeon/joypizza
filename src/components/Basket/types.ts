export interface ICatalogCard {
  id: string;
  link: string;
  image: string;
  title: string;
  info?: string;
  price: number;
  extra?: boolean;
  currency: 'BYN';
}

export interface IBasketCard extends ICatalogCard {
  amount: number;
}

export interface IBasket {
  basketList: IBasketCard[];
  basketExtraList: IBasketCard[];
}
