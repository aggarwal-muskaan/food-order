import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import { cartContext, changeCartValue } from "../../store/cart.context";
import classes from "../../styles/Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import axios from "axios";

function Cart(props) {
  const [isOrder, setOrder] = useState(false);
  const [orderSubmitted, setOrderSubmission] = useState(false);
  const [isSendingOrder, setOrderStatus] = useState(false);
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

  const handleConfirmedOrder = async (userData) => {
    const url = "https://meals-demo-default-rtdb.firebaseio.com/orders.json";
    setOrderStatus(true);
    await axios
      .post(url, {
        user: userData,
        userOrder: currentItems.items,
        userTotalPrice: totalAmount,
      })
      .catch((err) => alert(`${err} \n "Something went wrong!"`));
    setOrderStatus(false);
    setOrderSubmission(true);
    dispatch({ type: "clearCart" });
  };

  const isCartEmpty = currentItems.items.length !== 0 ? false : true;

  const totalAmount = `$${currentItems.totalAmt.toFixed(2)}`;

  const isSubmittingModalContent = <p>Sending Order....</p>;
  const didSubmitModalContent = (
    <p>
      Successfully sent the order!<span>👍</span>
    </p>
  );

  return (
    <Modal {...props}>
      {!orderSubmitted && !isSendingOrder && (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isOrder ? (
            <Checkout
              onCancel={props.onClose}
              onConfirm={(userOrder) => handleConfirmedOrder(userOrder)}
            />
          ) : (
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
              {!isCartEmpty && (
                <button
                  className={classes.button}
                  onClick={() => setOrder(true)}
                >
                  Order
                </button>
              )}
            </div>
          )}
        </>
      )}
      {isSendingOrder && isSubmittingModalContent}
      {orderSubmitted && !isSendingOrder && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
