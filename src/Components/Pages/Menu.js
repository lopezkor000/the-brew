import React, { useState } from 'react';
import '../CSS Files/Menu.css'; // Adjust the path if necessary

const Menu = () => {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Object that stores categories and their drinks
  const drinksData = {
    'Seasonal Drinks': ['Pumpkin Spice Latte', 'Cinnamon Roll'],
    'Classics': [
      'Classic Brew', 'Hand Brewed', 'Espresso', 'Caramel Macchiato',
      'Mocha', 'Americano', 'Cappuccino', 'Latte', 'Flat White'
    ],
    'Tea': [
      'Sweet/Unsweet', 'Green', 'Earl Grey', 'Decaf', 'Cinnamon Spice'
    ],
    'Specialty Drinks': [
      'La Palma', 'Affogato', 'The Smashing Pumpkin', 'Matcha', 'Chai'
    ],
    'Whole Coffee': ['956 Blend', 'Colombia Blend', 'Ethiopia Blend'],
    'Frappuccinos': [
      'Pumpkin Spice Frappucino', 'Mocha Frappuccino',
      'Apple Crisp Frappuccino', 'Espresso Frappuccino',
      'Caramel Frappuccino', 'Caffé Vanilla Frappuccino'
    ],
    'Pastries': [
      'Chocolate Chip Cookie', 'Brownie', 'Banana Muffin', 'Banana Bread',
      'Cinnamon Roll', 'Chocolate Muffin'
    ]
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to reset the selected category (back to category view)
  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="menu-page">
      <header className="menu-header">
        <a href="/"><img src='logo.png' style={{width: 150, height: 80}}></img></a>
        <nav className="menu-nav">
          <ul>
            <li><a href="/menu" style={{color: "white"}}>Menu</a></li>
            <li><a href="/about" style={{color: "white"}}>About</a></li>
            <li><a href="/contact" style={{color: "white"}}>Contact Us</a></li>
          </ul>
        </nav>
        <div className="cart-logo">
          Cart logo <span className="cart-count">1</span>
        </div>
      </header>

      <h1 className="menu-title">Menu</h1>

      {/* If no category is selected, show the categories */}
      {!selectedCategory && (
        <div className="category-grid">
          {Object.keys(drinksData).map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-image">
                <span>Photo of category</span>
              </div>
              <p className="category-name">{category}</p>
            </div>
          ))}
        </div>
      )}

      {/* If a category is selected, show the drinks */}
      {selectedCategory && (
        <>
          <button className="back-button" onClick={handleBackToCategories}>
            Back to Categories
          </button>
          <h2 className="category-title">{selectedCategory}</h2>
          <div className="drink-grid">
            {drinksData[selectedCategory].map((drink, index) => (
              <div key={index} className="drink-card">
                <div className="drink-image">
                  <span>Photo of Drink</span>
                </div>
                <p className="drink-name">{drink}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
