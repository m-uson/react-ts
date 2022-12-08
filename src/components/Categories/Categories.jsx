import React, { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (i) => {
    setActive(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={active === i ? "active" : ""}
            key={i}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
