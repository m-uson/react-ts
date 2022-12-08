import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoading = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={260}
      height={450}
      viewBox="0 0 260 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="105" cy="94" r="93" />
      <rect x="4" y="197" rx="10" ry="10" width="204" height="24" />
      <rect x="4" y="232" rx="6" ry="6" width="204" height="60" />
      <rect x="4" y="307" rx="5" ry="5" width="65" height="25" />
      <rect x="106" y="300" rx="20" ry="20" width="100" height="35" />
    </ContentLoader>
  );
};

export default PizzaLoading;
