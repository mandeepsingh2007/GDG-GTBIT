import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar = ({ onSearch }:SearchBarProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <div className="w-[80vw] md:w-[40vw] rounded-lg ">
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search projects by keyword (e.g., app, web, cyber, ml...)"
        className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
