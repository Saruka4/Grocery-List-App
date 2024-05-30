import React, { useState } from 'react';

function GroceryList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter grocery item" 
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
