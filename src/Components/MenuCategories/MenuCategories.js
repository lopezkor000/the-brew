// src/Components/MenuCategories/MenuCategories.js
import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS Files/MenuCategories.css";

const MenuCategories = () => {
  const categories = [
    { name: "Seasonal Drinks", path: "/menu/seasonal-drinks", image: spice-girls },
    { name: "Classics", path: "/menu/classics", image: "category2.png" },
    { name: "Frappuccinos", path: "/menu/frappuccinos", image: "category3.png" },
    { name: "Tea", path: "/menu/tea", image: "category4.png" },
    { name: "Specialty Drinks", path: "/menu/specialty-drinks", image: "category5.png" },
    { name: "Pastries", path: "/menu/pastries", image: "category6.png" },
    { name: "Whole Coffee", path: "/menu/whole-coffee", image: "category7.png" },
  ];

  return (
    <main className="categories-container">
      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-item" key={category.name}>
            <Link to={category.path}>
              <div className="category-photo">
                <img src={`${category.image}.jpg`}/>
              </div>
              <div className="category-name">{category.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenuCategories;
