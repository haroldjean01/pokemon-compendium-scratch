import React from 'react';
import './Select.css';

export default function Select({ types, handleTypeChange }) {
  return (
    <select onChange={(e) => handleTypeChange(e.target.value)}>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
