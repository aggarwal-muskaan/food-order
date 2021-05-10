import React from "react";
import Modal from "../UI/Modal";
import classes from "../../styles/Cart.module.css";

function Cart(props) {
  //   const cartItems = (
  //     <ul className={classes.["cart-items"]}>
  //       {arr.map((i) => (
  //         <li>{i.name}</li>
  //       ))}
  //     </ul>
  //   );

  return (
    <Modal>
      {/* {cartItems} */}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
