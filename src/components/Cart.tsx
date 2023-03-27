import { useEffect, useState } from 'react';
import { ICartItem } from '../models/application.model';
import { thousandSeparator } from '../utilities/formatter';
import CartItem from './CartItem';
import { ICart, useCartStore } from '../store/cartStore';

export const Cart = () => {
  const { items, clearCart } = useCartStore((state: ICart) => state);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = items.reduce((p, n) => {
      return p + n.price * n.quantity;
    }, 0);
    setSubtotal(total);
  }, [items]);

  return (
    <aside className="w-[300px] bg-orange-100 drop-shadow-lg hidden md:block max-h-screen overflow-auto">
      <div className="sticky top-0 p-4 w-full">
        <div className="relative h-10 w-full">
          <button
            type="button"
            onClick={clearCart}
            className="text-white drop-shadow-lg bg-red-500 font-bold px-2 py-1 rounded-full absolute right-0"
          >
            Batal <i className="fi fi-rr-trash"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {items.map((item: ICartItem) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="rounded-md bg-white p-4 mt-2 text-orange-400 font-bold flex justify-between">
          <span>Subtotal:</span>
          <span>{thousandSeparator(subtotal)}</span>
        </div>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-lg mt-2 w-full">
          Bayar
        </button>
      </div>
    </aside>
  );
};
