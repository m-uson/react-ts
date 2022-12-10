import React from "react";
import styles from "./notFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Нечего не найден
      </h1>
      <p className={styles.descriptions}>
        К сожаление данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
