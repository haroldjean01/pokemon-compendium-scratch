import React, { useState } from 'react';

export default function Query({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    handleSearch(searchQuery);
  }

  function handleSearchInput(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
        />
        <button type="submit">Search</button>
      </form>

    </>
  );
}
