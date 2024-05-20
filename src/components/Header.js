import classes from "../styles/Header.module.css";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../store/cart.context";
import CartIcon from "../assets/CartIcon";
import mealsImage from "../assets/meals.jpg";

function Header({ onShowCart }) {
  const [buttonBump, setButtonToBump] = useState(false);
  const itemsInCart = useContext(cartContext);

  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;
  useEffect(() => {
    if (itemsInCart.length === 0) {
      return;
    }
    setButtonToBump(true);
    const timer = setTimeout(() => {
      setButtonToBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [itemsInCart]);

  const numberofItems = itemsInCart.items.reduce((i, j) => i + j.quantity, 0);

  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>
        <h1>Munchies</h1>
        <button className={btnClasses} onClick={onShowCart}>
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
