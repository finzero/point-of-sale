export interface IProduct {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface CartItemProps {
  item: ICartItem;
}
