import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or item..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginTop: '1rem', width: '100%', padding: '0.5rem' }}
    />
  );
}

export default SearchBar;
