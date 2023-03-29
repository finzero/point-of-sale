interface SearchInputProps {
  click: (term: string) => void;
}
export const SearchInput = (props: SearchInputProps) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="w-full rounded-lg text-orange-500 italic shadow-inner h-8 p-2 border-2 border-orange-200 focus:outline-none"
      placeholder="Cari Produk"
      onChange={(e) => props.click(e.target.value)}
    />
  );
};
