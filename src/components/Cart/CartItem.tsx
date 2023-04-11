import { CartItemProps } from '../../models/application.model';
import { thousandSeparator } from '../../utilities/formatter';
import placeholder from '../../assets/sushi.jpg';
import { useCartAction } from '../../store/cartStore';

const CartItem = (props: CartItemProps) => {
  const { item } = props;
  const { increaseQty, decreaseQty } = useCartAction();
  const imageSrc = item && item.image ? item.image : placeholder;
  const btnStyle = 'h-[20px] w-[20px] bg-orange-400 rounded shadow-md';

  return (
    <div className="flex w-full bg-white rounded-lg drop-shadow-md shadow-teal-400 p-2">
      <div className="p-2 bg-white rounded-md">
        <div
          className="w-[50px] h-[50px] shrink-0 rounded bg-cover"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>
      <div className="flex flex-col p-2 text-sm w-full">
        <div className="text-black">{item.name}</div>
        <div className="flex justify-between">
          <div className="text-orange-400 font-bold">
            Rp. {thousandSeparator(item.price)}
          </div>
          <div className="flex gap-2">
            <button onClick={() => decreaseQty(item)} className={btnStyle}>
              -
            </button>
            <span className="text-black">{item.quantity}</span>
            <button onClick={() => increaseQty(item)} className={btnStyle}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
