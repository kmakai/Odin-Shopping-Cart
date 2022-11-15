import React from "react";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  const printCards = () => {
    let cards = [];
    for (let i = 0; i < 6; i++) {
      cards.push(<ProductCard key={i} />);
    }
    return cards;
  };

  const cards = printCards();
  return <div>{cards}</div>;
};

export default Shop;
