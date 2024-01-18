import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'React',
    'NodeJs',
    'MonogoDB',
    'Express',
    'Angular',
    'VueJs',
  ]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Use Array.filter() to filter items based on the search term
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    // Set the filtered items to state
    setItems(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
