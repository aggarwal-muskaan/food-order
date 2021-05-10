import { changeCartValue } from "../../store/cart.context";
import React, { useContext } from "react";
import MItemForm from "./MItemForm";
import classes from "../../styles/MealItem.module.css";

function MealItem(props) {
  const dispatch = useContext(changeCartValue);

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <section className={classes.description}>{props.description}</section>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MItemForm
          id={props.id}
          formSubmit={(q) =>
            dispatch({
              type: "add",
              value: {
                id: props.id,
                name: props.name,
                quantity: q,
                price: props.price,
              },
            })
          }
        />
      </div>
    </li>
  );
}

export default MealItem;
