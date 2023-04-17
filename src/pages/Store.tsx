import { Cart } from '../components/Cart/Cart';
import { ProductList } from '../components/Product/ProductList';
import products from '../assets/json/products.json';
import { PopupConfirm } from '../components/PopupConfirm';
import useCart from '../hooks/useCart';

const Store = () => {
  const { handleCancel, handlePay, confirmConfig } = useCart();

  return (
    <>
      <main
        role="main"
        className="md:w-[calc(100vw-300px)] w-full px-4 py-4 bg-yellow-50 min-h-full"
      >
        <ProductList products={products.data} />
      </main>
      <aside>
        <Cart handleCancel={handleCancel} handlePay={handlePay} />
      </aside>
      <PopupConfirm {...confirmConfig} />
    </>
  );
};

export default Store;
