import placeholder from '../../assets/sushi.jpg';
import { IProduct } from '../../models/application.model';
import { useCartAction } from '../../store/cartStore';
import { thousandSeparator } from '../../utilities/formatter';

const CardProduct = (props: { product: IProduct }) => {
  const { product } = props;
  const { addToCart } = useCartAction();

  const imageSrc = product.image ? product.image : placeholder;
  return (
    <div
      onClick={() => addToCart(product)}
      className="flex flex-col m-auto items-center h-40 w-32 bg-white gap-2 p-2 rounded-lg shadow-lg cursor-pointer"
    >
      <div className="w-full h-20 bg-white rounded flex justify-center shrink-0 overflow-hidden">
        <img className="object-fill" src={imageSrc} alt="" />
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
