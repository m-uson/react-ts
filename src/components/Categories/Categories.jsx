import React from "react";

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
            key={i}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
