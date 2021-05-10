import React from "react";
import classes from "../../styles/MealItem.module.css";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <section className={classes.description}>{props.description}</section>
        <div className={classes.price}>{price}</div>
      </div>

      <div></div>
    </li>
  );
}

export default MealItem;
