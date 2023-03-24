import { IProduct } from '../models/application.model';
import CardProduct from './CardProduct';

export const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <main
      role="main"
      className="md:w-[calc(100vw-300px)] sm:w-full p-4 bg-yellow-50"
    >
      <div className="flex flex-row flex-wrap gap-2">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
