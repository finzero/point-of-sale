import orangeImg from '../assets/orange-slice.png';

export const Header = () => {
  return (
    <div className="flex gap-2 p-2">
      <img src={orangeImg} alt="Logo" className="w-12 h-12" />
      <span className="font-bold text-lg">Orange POS</span>
    </div>
  );
};
