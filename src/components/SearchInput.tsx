import { useRef } from 'react';

interface ISearchInputProps {
  onKeyup: (e: React.KeyboardEvent) => void;
  onClear: () => void;
}
const SearchInput = (props: ISearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClear() {
    const el = inputRef.current as HTMLInputElement;
    el.value = '';
    props.onClear();
  }

  return (
    <div className="flex justify-start gap-2 mx-6 rounded-lg my-2 text-black bg-slate-50 drop-shadow-xl">
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="search item"
        onKeyUp={(e) => props.onKeyup(e)}
        id="search"
        className="h-10 w-full px-2 py-1 text-slate-500 italic rounded-lg"
      />
      <span className="absolute top-3 right-2" onClick={handleClear}>
        <i className="fi fi-ss-cross text-slate-400 text-xs cursor-pointer"></i>
      </span>
    </div>
  );
};

export default SearchInput;
