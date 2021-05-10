import React from "react";
import classes from "../../styles/MAvailable.module.css";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../../helpers/dummy_content";
import MCard from "../UI/MCard";

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <MCard>
        <ul>
          {DUMMY_MEALS.map((m) => (
            <MealItem key={m.id} {...m} />
          ))}
        </ul>
      </MCard>
    </section>
  );
}

export default AvailableMeals;
