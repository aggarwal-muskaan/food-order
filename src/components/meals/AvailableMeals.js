import React, { useEffect, useState } from "react";
import classes from "../../styles/MAvailable.module.css";
import MealItem from "./MealItem";
import MCard from "../UI/MCard";
import axios from "axios";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      const baseUrl =
        "https://meals-demo-default-rtdb.firebaseio.com/DUMMY_MEALS.json";
      const res = await axios.get(baseUrl);
      const data = await res.data;

      //converting Firebase object into an array
      const mealsArray = [];
      for (let key in data) {
        mealsArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      // setting state with loaded meals
      setMeals(mealsArray);
    })();
  }, []);

  return (
    <section className={classes.meals}>
      <MCard>
        <ul>
          {meals.map((m) => (
            <MealItem key={m.id} {...m} />
          ))}
        </ul>
      </MCard>
    </section>
  );
}

export default AvailableMeals;
