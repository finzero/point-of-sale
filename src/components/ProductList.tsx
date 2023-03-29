import { useState } from 'react';
import { IProduct } from '../models/application.model';
import CardProduct from './CardProduct';
import { SearchInput } from './SearchInput';

export const ProductList = ({ products }: { products: IProduct[] }) => {
  // temporary search until API Ready
  const [term, setTerm] = useState('');

  return (
    <>
      <div className="w-[calc(100%-20px)] mb-2 mt-1">
        <SearchInput click={setTerm} />
      </div>
      <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 md:gap-1">
        {products
          .filter(
            (p: IProduct) =>
              p.name.toLowerCase().indexOf(term.toLowerCase()) >= 0
          )
          .map((product) => (
            <div className="mb-2" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
      </div>
    </>
  );
};
