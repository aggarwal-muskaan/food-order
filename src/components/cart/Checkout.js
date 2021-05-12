import React from "react";
import { Formik, Field, Form } from "formik";
import classes from "../../styles/Checkout.module.css";

function Checkout({ onCancel }) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  const validateName = (value) => {
    let error;
    if (!value.trim()) {
      error = "Enter a valid name!";
    }
    return error;
  };

  const validateStreet = (value) => {
    let error;
    if (!value.trim()) {
      error = "Enter a valid street!";
    }
    return error;
  };

  const validatePostal = (value) => {
    let error;
    if (!value.trim()) {
      error = "Please enter a valid postal code!";
    } else if (value.length !== 6) {
      error = "Enter 6 characters long postal code!";
    }
    return error;
  };

  const validateCity = (value) => {
    let error;
    if (!value.trim()) {
      error = "Enter a valid city!";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        street: "",
        postal: "",
        city: "",
      }}
      onSubmit={confirmHandler}
    >
      {({ errors, touched, isValidating }) => (
        <Form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <Field
              name="name"
              validate={validateName}
              className={classes.control}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
          </div>

          <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <Field
              name="street"
              validate={validateStreet}
              className={classes.control}
            />
            {errors.street && touched.street && <p>{errors.street}</p>}
          </div>

          <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <Field
              name="postal"
              validate={validatePostal}
              className={classes.control}
            />
            {errors.postal && touched.postal && <p>{errors.postal}</p>}
          </div>

          <div className={classes.control}>
            <label htmlFor="city">City</label>
            <Field
              name="city"
              validate={validateCity}
              className={classes.control}
            />
            {errors.city && touched.city && <p>{errors.city}</p>}
          </div>

          <div className={classes.actions}>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Checkout;
