interface SearchInputProps {
  onChange: (term: string) => void;
}
const SearchInput = () => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="w-72 rounded-sm text-orange-500 italic shadow-inner h-8 p-2 border-2 border-orange-200 focus:outline-none"
      placeholder="Cari Produk"
    />
  );
};

export default SearchInput;
