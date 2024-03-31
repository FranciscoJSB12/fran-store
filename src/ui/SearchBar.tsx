import { ChangeEvent } from "react";

interface PropType {
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, changeHandler }: PropType) => {
  return (
    <>
      <label className="text-gray-700 text-md mb-2" htmlFor="search">
        Search products
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeHandler}
        className="w-10/12 max-w-xl px-4 py-3 mb-4 shadow-lg rounded-full border border-gray-400 focus:outline-none"
      />
    </>
  );
};
