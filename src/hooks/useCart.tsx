import React, { useState } from 'react';
import { PopupConfirmProps } from '../components/PopupConfirm';
import { useCartAction } from '../store/cartStore';

const initialConfirmConfig = {
  show: false,
  title: '',
  description: '',
  confirm: () => {},
  cancel: () => {},
};

const useCart = () => {
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

  function closeModal() {
    setConfirmConfig({ ...initialConfirmConfig, show: false });
  }

  const { clearCart } = useCartAction();

  return { handleCancel, handlePay, confirmConfig };
};

export default useCart;
