import React, { useState } from 'react';
import Menu from './Menu.js';

const allMenuItems = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', price: '$5.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', category: 'Lunch', price: '$9.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Milkshake', category: 'Shakes', price: '$3.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Omelette', category: 'Breakfast', price: '$4.99', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Pizza', category: 'Lunch', price: '$11.99', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Strawberry Shake', category: 'Shakes', price: '$4.50', image: 'https://via.placeholder.com/150' },
];

function App() {
  const [menuItems, setMenuItems] = useState(allMenuItems);
  const [category, setCategory] = useState('All');

  const handleFilter = (category) => {
    setCategory(category);
    if (category === 'All') {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="button-group">
        <button id="filter-btn-1" onClick={() => handleFilter('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('Shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
