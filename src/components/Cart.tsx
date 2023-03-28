import { useEffect, useState } from 'react';
import { ICartItem } from '../models/application.model';
import { thousandSeparator } from '../utilities/formatter';
import CartItem from './CartItem';
import { useCartAction, useCartItems } from '../store/cartStore';
import Button from './Button';

export const Cart = () => {
  const items = useCartItems();
  const { clearCart } = useCartAction();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = items.reduce((p, n) => {
      return p + n.price * n.quantity;
    }, 0);
    setSubtotal(total);
  }, [items]);

  function bayar() {
    alert(`Bayar`);
  }

  return (
    <div className="p-4 w-full max-h-screen overflow-auto">
      <div className="flex justify-between p-2 h-10 w-full mb-2">
        <div className="text-black font-bold">Total Barang: {items.length}</div>
        <button
          type="button"
          onClick={clearCart}
          className="text-white drop-shadow-lg bg-orange-700 font-bold px-2 py-1 rounded-md w-8 h-8 pt-2"
        >
          <i className="fi fi-ss-trash"></i>
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
      <Button label="Bayar" click={bayar} disabled={items.length === 0} />
    </div>
  );
};
