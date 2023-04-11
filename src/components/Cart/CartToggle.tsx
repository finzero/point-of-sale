import { useCartItems } from '../../store/cartStore';

interface CartToggleProps {
  click: () => void;
}
const CartToggle = ({ click }: CartToggleProps) => {
  const items = useCartItems();

  return (
    <div
      className="md:hidden cursor-pointer absolute top-6 -left-9 h-10 w-10 rounded-l-xl bg-orange-300 drop-shadow-lg flex justify-center items-center"
      onClick={click}
    >
      <i className="text-white fi fi-ss-shopping-cart text-lg"></i>
      <span className="bg-red-500 text-white font-bold absolute rounded-full -top-2 -left-2 w-5 h-5 text-center text-xs">
        {items.length}
      </span>
    </div>
  );
};
export default CartToggle;
