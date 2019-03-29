import React from "react";
import classes from "./Order.css";

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amoount: props.ingredients[ingredientName]
    });
  }
  const ingredientOP = ingredients.map(ig => {
    return (
      <span
        style={{
          transform: "capitalize",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amoount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>{ingredientOP}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
