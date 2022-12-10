import React, { useEffect, useState } from "react";
import { Categories, PizzaBlock, PizzaLoading, Sort } from "../components";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const posts = await fetch(
      "https://6391e86cac688bbe4c565a77.mockapi.io/items"
    );
    const response = await posts.json();
    setItems(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaLoading key={i} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
