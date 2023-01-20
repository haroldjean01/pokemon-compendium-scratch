import React from 'react';
import './Select.css';

export default function Select({ types, handleTypeChange }) {
  return (
    <>
      <h3>Filter by Type!</h3>
      <select onChange={(e) => handleTypeChange(e.target.value)}>
        <option value='all'>ALL</option>
        {types.map(({ type }) => (
          <option key={type} value={type}>
            {type.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
}
