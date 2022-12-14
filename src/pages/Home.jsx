import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  Pagination,
  PizzaBlock,
  PizzaLoading,
  Sort,
} from "../components";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    setIsLoading(true);

    axios
      .get(
        `https://6391e86cac688bbe4c565a77.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    getPosts();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, i) => <PizzaLoading key={i} />);
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <>
      <div className="content__top">
        <Categories onChangeCategory={onChangeCategory} value={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
