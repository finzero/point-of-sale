interface CartToggleProps {
  click: () => void;
}
const CartToggle = ({ click }: CartToggleProps) => {
  return (
    <div
      className="sm:block md:hidden absolute top-6 -left-9 h-10 w-10 rounded-l-xl bg-orange-300 drop-shadow-lg flex justify-center items-center"
      onClick={click}
    >
      <i className="text-white fi fi-ss-shopping-cart text-lg"></i>
    </div>
  );
};
export default CartToggle;
