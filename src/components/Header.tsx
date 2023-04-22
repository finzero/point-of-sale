import orangeImg from '../assets/orange-slice.png';
import { useAuthStore } from '../store/authStore';
import logoutIcon from '../assets/power.png';

export const Header = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className="flex gap-2 p-2">
      <img src={orangeImg} alt="Logo" className="w-12 h-12" />
      <span className="font-bold text-lg">Orange POS</span>
      <span className="absolute right-2 font-bold" onClick={logout}>
        <img src={logoutIcon} alt="logout" className="h-[25px]" />
      </span>
    </div>
  );
};
