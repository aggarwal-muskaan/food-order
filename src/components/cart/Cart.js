import React from "react";
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
    <div>
      {/* {cartItems} */}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
