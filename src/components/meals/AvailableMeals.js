import React from "react";
import classes from "../../styles/MAvailable.module.css";
import DUMMY_MEALS from "../../helpers/dummy_content";

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((m) => (
          <li>{m.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default AvailableMeals;
