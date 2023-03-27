import { IProduct } from '../models/application.model';
import { thousandSeparator } from '../utilities/formatter';
import placeholder from '../assets/sushi.jpg';
import { ICart, useCartStore } from '../store/cartStore';

const CardProduct = (props: { product: IProduct }) => {
  const { product } = props;
  const addToCart = useCartStore((state: ICart) => state.addToCart);

  const imageSrc = product.image ? product.image : placeholder;
  return (
    <div
      onClick={() => addToCart(product)}
      className="flex flex-col m-auto items-center w-32 bg-white gap-2 p-2 rounded-lg shadow-lg cursor-pointer"
    >
      <div className="h-30 bg-white rounded flex justify-center shrink-0 overflow-hidden">
        <img className="object-contain" src={imageSrc} alt="" />
      </div>
      <div className="flex flex-col text-sm">
        <div className="text-black text-ellipsis overflow-hidden">
          {product.name}
        </div>
        <span className="font-bold text-orange-500">
          Rp.{thousandSeparator(product.price)}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
