import { Cart } from '../components/Cart/Cart';
import { ProductList } from '../components/Product/ProductList';
import products from '../assets/json/products.json';
import { PopupConfirm } from '../components/UI/PopupConfirm';
import useCart from '../hooks/useCart';
import SearchInput from '../components/UI/SearchInput';
import { useState } from 'react';

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
        <section aria-describedby="filter-section" className="mb-2">
          <button
            className="px-3 pb-1 pt-2 rounded-lg bg-orange-400"
            onClick={() => setShowSearch(true)}
          >
            <i className="fi fi-ss-search text-white cursor-pointer"></i>
          </button>
          {filter && (
            <>
              <span className="text-orange-900 pl-2 underline underline-offset-2">
                {filter}
              </span>
              <i
                onClick={() => setFilter('')}
                className="fi fi-ss-cross-circle text-red-600 cursor-pointer ml-2"
                title="Clear Filter"
              ></i>
            </>
          )}
        </section>
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
