import { useEffect, useState } from 'react';
import { ICartItem } from '../models/application.model';
import { thousandSeparator } from '../utilities/formatter';
import CartItem from './CartItem';
import { useCartItems } from '../store/cartStore';
import Button from './Button';
import CartToggle from './CartToggle';

interface CartProps {
  handlePay: () => void;
  handleCancel: () => void;
}

export const Cart = ({ handlePay, handleCancel }: CartProps) => {
  const items = useCartItems();
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const total = items.reduce((p, n) => {
      return p + n.price * n.quantity;
    }, 0);
    setSubtotal(total);
  }, [items]);

  const isSmallDevice = window.innerWidth <= 450;
  const [showCart, setShowCart] = useState(!isSmallDevice);

  function toggleCart() {
    setShowCart((show) => !show);
  }

  return (
    <div
      className={`fixed top-8 -right-[300px] duration-500 bg-orange-100 md:block min-h-full ${
        showCart ? '-translate-x-[300px]' : ''
      }`}
    >
      <div className="max-h-[calc(100vh-40px)] overflow-auto">
        <CartToggle click={toggleCart} />
        <div className="w-[300px] p-4">
          <div className="flex justify-between p-2 h-10 w-full mb-2">
            <div className="text-black font-bold">
              Total Barang: {items.length}
            </div>
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
          <div className="flex gap-1 ">
            <Button label="Bayar" click={handlePay} disabled={!items.length} />
            <Button
              disabled={!items.length}
              label="Batal"
              click={handleCancel}
              style={{ bg: 'bg-red-500', color: 'text-white' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
