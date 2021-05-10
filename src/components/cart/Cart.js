import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { cartContext } from "../../store/cart.context";
import classes from "../../styles/Cart.module.css";

function Cart(props) {
  const currentItems = useContext(cartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {currentItems.items.map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal {...props}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{currentItems.totalAmt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
