import { useEffect, useState } from 'react';
import { IProduct, IProductListProps } from '../../models/application.model';
import CardProduct from './CardProduct';
import EmptyImage from '../../assets/no-money.png';

export const ProductList = ({ products, filter }: IProductListProps) => {
  const [filteredProduct, setFilteredProduct] = useState(products);
  useEffect(() => {
    setFilteredProduct(
      products.filter(
        (p: IProduct) => p.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      )
    );
  }, [filter]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 md:gap-1">
        {!!filteredProduct.length &&
          filteredProduct.map((product) => (
            <div className="mb-2" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
      </div>
      {!filteredProduct.length && (
        <div className="flex items-center justify-center mt-32">
          <div className="w-64">
            <img src={EmptyImage} alt="No Product Found" />
            <h1 className="text-black text-4xl font-bold mt-2">
              No Item Found
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
