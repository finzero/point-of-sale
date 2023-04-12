import { useState } from 'react';
import { IProduct } from '../../models/application.model';
import CardProduct from './CardProduct';

export const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 md:gap-1">
        {products.map((product) => (
          <div className="mb-2" key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
};
