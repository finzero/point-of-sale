import { Cart } from '../components/Cart';
import { ProductList } from '../components/ProductList';
import products from '../assets/json/products.json';

export const Store = () => {
  return (
    <>
      <main
        role="main"
        className="md:w-[calc(100vw-300px)] w-full p-4 bg-yellow-50 min-h-full"
      >
        <ProductList products={products.data} />
      </main>
      <aside className="fixed top-8 right-0 bg-orange-100 md:block min-h-full">
        <Cart />
      </aside>
    </>
  );
};
