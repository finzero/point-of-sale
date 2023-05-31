import { Cart } from '../components/Cart/Cart';
import { ProductList } from '../components/Product/ProductList';
import products from '../assets/json/products.json';
import { PopupConfirm } from '../components/UI/PopupConfirm';
import useCart from '../hooks/useCart';
import SearchInput from '../components/UI/SearchInput';
import { useState } from 'react';
import { ProductFilter } from '../components/Product/ProductFilter';

const Store = () => {
  const { handleCancel, handlePay, confirmConfig } = useCart();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  return (
    <>
      <main
        role="main"
        className="md:w-[calc(100vw-300px)] w-full px-4 py-4 bg-yellow-50 min-h-full"
      >
        <ProductFilter
          filter={filter}
          setFilter={setFilter}
          setShowSearch={setShowSearch}
        />
        <ProductList products={products.data} filter={filter} />
      </main>
      <aside>
        <Cart handleCancel={handleCancel} handlePay={handlePay} />
      </aside>
      <PopupConfirm {...confirmConfig} />
      <SearchInput
        toggleSearch={showSearch}
        onSearch={(term) => {
          setFilter(term);
          setShowSearch(false);
        }}
      />
    </>
  );
};

export default Store;
