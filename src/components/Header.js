import classes from "../styles/Header.module.css";
import React from "react";
import CartIcon from "../assets/CartIcon";
import mealsImage from "../assets/meals.jpg";

function Header({ onShowCart }) {
  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button className={classes.button} onClick={onShowCart}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>5</span>
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food!" />
      </div>
    </div>
  );
}

export default Header;
