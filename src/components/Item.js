import React, { useState } from "react";

function Item({ name, category }) {

  const [ inCart, placeInCart ] = useState(false)

  const cartClass = inCart ? "in-cart" : ""

  function addItemToCart () {
    placeInCart ((inCart) => !inCart)
  }

  return (
    <li className={ cartClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ addItemToCart } className="add">{ inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
