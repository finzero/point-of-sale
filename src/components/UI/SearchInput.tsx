import { KeyboardEvent, useEffect, useRef } from 'react';
import Button from './Button';

interface ISearchInputProps {
  onSearch: (term: string) => void;
  toggleSearch: boolean;
  // onClear: () => void;
}
const SearchInput = (props: ISearchInputProps) => {
  const { toggleSearch, onSearch } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus on input search whenever input form is displayed
    if (toggleSearch) {
      inputRef.current?.focus();
    }
  }, [toggleSearch]);

  function handleSearch() {
    const searchVal = inputRef.current?.value;
    onSearch(searchVal || '');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const isEnter = e.code === 'Enter';
    if (isEnter) {
      handleSearch();
    }
  }

  return (
    <div
      className={`${
        toggleSearch ? '' : 'hidden'
      } w-screen h-screen fixed top-0 left-0 bg-slate-800/80 flex flex-col items-center justify-center`}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="bg-transparent text-white italic text-xl border-b-2 border-b-white w-4/5 focus:outline-none"
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="h-20">
        <Button label="Search" click={handleSearch} />
      </div>
    </div>
  );
};

export default SearchInput;
