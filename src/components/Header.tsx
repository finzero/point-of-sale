import { useAuthStore } from '../store/authStore';
import logoutIcon from '../assets/power.png';
import { PopupConfirm } from './UI/PopupConfirm';
import { useState } from 'react';

export const Header = () => {
  const logout = useAuthStore((state) => state.logout);
  const [confirmConfirm, setconfirmConfirm] = useState({
    show: false,
    title: 'Logout',
    description: 'Do you want to logout ?',
    confirm: logout,
    cancel: () => toggleModal(false),
  });
  function toggleModal(show: boolean) {
    setconfirmConfirm((config) => {
      return {
        ...config,
        show,
      };
    });
  }

  return (
    <div className="flex gap-2 p-2">
      <PopupConfirm {...confirmConfirm} />
      <span className="font-bold text-lg">Orange POS</span>
      <span
        className="absolute right-2 font-bold"
        onClick={() => toggleModal(true)}
      >
        <img src={logoutIcon} alt="logout" className="h-[25px]" />
      </span>
    </div>
  );
};
