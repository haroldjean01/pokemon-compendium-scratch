import React from 'react';
import './Select.css';

export default function Select({ types }) {
  return (
    <select>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
