import { Cart } from '../components/Cart';
import { ProductList } from '../components/ProductList';
import { IProduct } from '../models/application.model';

const products: IProduct[] = [
  { id: 1, name: 'Sushi sapi', price: 10000 },
  { id: 2, name: 'Sushi ayam', price: 10000 },
  { id: 3, name: 'Sushi bebek', price: 90000 },
  { id: 4, name: 'Sushi Kambing', price: 15000 },
  { id: 5, name: 'Sushi susanti', price: 365000 },
  { id: 6, name: 'Sushi domba', price: 80000 },
  { id: 7, name: 'Sushi kerbau', price: 80000 },
  { id: 8, name: 'Sushi buaya', price: 80000 },
  { id: 9, name: 'Sushi cacing', price: 80000 },
  { id: 10, name: 'Sushi cicak', price: 80000 },
  { id: 11, name: 'Sushi ular', price: 80000 },
  { id: 12, name: 'Sushi tikus', price: 80000 },
];

export const Store = () => {
  return (
    <>
      <main
        role="main"
        className="md:w-[calc(100vw-300px)] w-full p-4 bg-yellow-50 min-h-full"
      >
        <ProductList products={products} />
      </main>
      <aside className="fixed top-8 right-0 w-[300px] bg-orange-100 hidden md:block min-h-full overflow-auto">
        <Cart />
      </aside>
    </>
  );
};
