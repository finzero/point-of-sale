import { useEffect, useState } from 'react';
import { ICartItem } from '../models/application.model';
import { thousandSeparator } from '../utilities/formatter';
import CartItem from './CartItem';
import { useCartAction, useCartItems } from '../store/cartStore';
import Button from './Button';
import { PopupConfirm, PopupConfirmProps } from './PopupConfirm';
import CartToggle from './CartToggle';

const initialConfirmConfig = {
  show: false,
  title: '',
  description: '',
  confirm: () => {},
  cancel: () => {},
};

export const Cart = () => {
  const items = useCartItems();
  const { clearCart } = useCartAction();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [confirmConfig, setConfirmConfig] =
    useState<PopupConfirmProps>(initialConfirmConfig);

  useEffect(() => {
    const total = items.reduce((p, n) => {
      return p + n.price * n.quantity;
    }, 0);
    setSubtotal(total);
  }, [items]);

  function handlePay() {}

  function cancelConfirmation() {
    setConfirmConfig({
      show: true,
      title: 'Konfirmasi Pembatalan',
      description: 'Anda ingin membatalkan Pesanan',
      confirm: handleClearCart,
      cancel: closeModal,
    });
  }

  function handleClearCart() {
    clearCart();
    closeModal();
  }

  function closeModal() {
    setConfirmConfig({ ...initialConfirmConfig, show: false });
  }

  const isSmallDevice = window.innerWidth <= 450;
  const [showCart, setShowCart] = useState(!isSmallDevice);

  function toggleCart() {
    setShowCart((show) => !show);
  }

  return (
    <div className="max-h-[calc(100vh-40px)] overflow-auto">
      <CartToggle click={toggleCart} />
      <div className={`${showCart ? 'w-[300px] p-4' : 'w-0'}`}>
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
        <Button label="Bayar" click={handlePay} disabled={!items.length} />
        <Button
          disabled={!items.length}
          label="Batal"
          click={cancelConfirmation}
          style={{ bg: 'bg-red-500', color: 'text-white' }}
        />
        <PopupConfirm {...confirmConfig} />
      </div>
    </div>
  );
};
