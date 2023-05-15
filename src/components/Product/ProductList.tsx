import { useState } from 'react';
import { IProduct } from '../../models/application.model';
import CardProduct from './CardProduct';

export const ProductList = ({ products }: { products: IProduct[] }) => {
  const [term, setTerm] = useState('');
  function handleSearch(e: React.KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  }

  function handleClear() {
    setTerm('');
  }

  return (
    <>
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
