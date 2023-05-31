import { IProductFilterProps } from '../../models/application.model';

export const ProductFilter = ({
  setShowSearch,
  filter,
  setFilter,
}: IProductFilterProps) => (
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
);
