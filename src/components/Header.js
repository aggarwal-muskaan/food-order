import classes from "../styles/Header.module.css";
import { useContext } from "react";
import { cartContext } from "../store/cart.context";
import CartIcon from "../assets/CartIcon";
import mealsImage from "../assets/meals.jpg";

function Header({ onShowCart }) {
  const itemsInCart = useContext(cartContext);
  const numberofItems = itemsInCart.items.reduce((i, j) => i + j.quantity, 0);

  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button className={classes.button} onClick={onShowCart}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberofItems}</span>
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food!" />
      </div>
    </div>
  );
}

export default Header;
