import React, { useEffect, useState } from "react";
import { Categories, Header, PizzaBlock, Sort } from "./components";

const App = () => {
  const [items, setItems] = useState([]);

  console.log(items);

  const getPosts = async () => {
    const posts = await fetch(
      "https://6391e86cac688bbe4c565a77.mockapi.io/items"
    );
    const response = await posts.json();
    setItems(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items?.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
