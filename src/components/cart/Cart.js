import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { cartContext, changeCartValue } from "../../store/cart.context";
import classes from "../../styles/Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const currentItems = useContext(cartContext);
  const dispatch = useContext(changeCartValue);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {currentItems.items.map((i) => (
        <CartItem
          key={i.id}
          {...i}
          onRemove={() => handleItemRemove(i.id)}
          onAdd={() => handleItemAdd(i)}
        />
      ))}
    </ul>
  );

  const handleItemRemove = (id) => {
    dispatch({ type: "decrementItem", value: id });
  };

  const handleItemAdd = (item) => {
    dispatch({ type: "add", value: { ...item, quantity: 1 } });
  };

  const isCartEmpty = currentItems.items.length !== 0 ? false : true;

  const totalAmount = `$${currentItems.totalAmt.toFixed(2)}`;

  return (
    <Modal {...props}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {!isCartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
