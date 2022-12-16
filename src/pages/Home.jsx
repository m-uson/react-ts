import React, { useEffect, useState } from "react";
import {
  Categories,
  Pagination,
  PizzaBlock,
  PizzaLoading,
  Sort,
} from "../components";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "Популярности",
    sortProperty: "rating",
  });

  const getPosts = async () => {
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    const posts = await fetch(
      `https://6391e86cac688bbe4c565a77.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    const response = await posts.json();
    setItems(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, i) => <PizzaLoading key={i} />);
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <>
      <div className="content__top">
        <Categories
          onChangeCategory={(i) => setCategoryId(i)}
          value={categoryId}
        />
        <Sort onChangeSort={(i) => setSortType(i)} value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
