import { useState } from 'react';
import { IPopupConfirmProps } from '../components/UI/PopupConfirm';
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
    useState<IPopupConfirmProps>(initialConfirmConfig);

  function handlePay() {
    setConfirmConfig({
      show: true,
      title: 'Payment',
      description: 'Payment feature is on progress',
      confirm: closeModal,
      cancel: closeModal,
    });
  }

  function handleCancel() {
    setConfirmConfig({
      show: true,
      title: 'Order Cancel',
      description: 'Cancel Order ?',
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
