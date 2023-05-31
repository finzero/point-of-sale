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

export interface IProductFilterProps {
  setShowSearch: (state: boolean) => void;
  filter: string;
  setFilter: (term: string) => void;
}
