import React, { useState } from 'react';

// Interface defining the props for SearchBar component
interface SearchBarProps {
  onSearch: (query: string) => void;
}

// SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // State to manage the input value for the search query
  const [query, setQuery] = useState('');

  // Function to handle input change in the search bar
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // Call the onSearch prop with the current query value
    onSearch(query);
  };

  return (
    <div style={{ marginRight: '50px' }}>
      {/* Input element for typing the search query */}
      <input
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          marginRight: '10px',
          height: '30px',
        }}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      {/* Button to trigger the search */}
      <button
        style={{
          height: '35px',
          backgroundColor: 'red',
          color: 'white',
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
export {};
