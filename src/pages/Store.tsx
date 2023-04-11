import { Cart } from '../components/Cart';
import { ProductList } from '../components/ProductList';
import products from '../assets/json/products.json';
import { useState } from 'react';
import { PopupConfirm, PopupConfirmProps } from '../components/PopupConfirm';
import { useCartAction } from '../store/cartStore';

const initialConfirmConfig = {
  show: false,
  title: '',
  description: '',
  confirm: () => {},
  cancel: () => {},
};

export const Store = () => {
  const [confirmConfig, setConfirmConfig] =
    useState<PopupConfirmProps>(initialConfirmConfig);

  function handlePay() {
    setConfirmConfig({
      show: true,
      title: 'Informasi',
      description: 'Payment feature is on progress',
      confirm: closeModal,
      cancel: closeModal,
    });
  }

  function handleCancel() {
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

  const { clearCart } = useCartAction();

  function closeModal() {
    setConfirmConfig({ ...initialConfirmConfig, show: false });
  }

  return (
    <>
      <main
        role="main"
        className="md:w-[calc(100vw-300px)] w-full p-4 bg-yellow-50 min-h-full"
      >
        <ProductList products={products.data} />
      </main>
      <aside>
        <Cart handleCancel={handleCancel} handlePay={handlePay} />
      </aside>
      <PopupConfirm {...confirmConfig} />
    </>
  );
};
