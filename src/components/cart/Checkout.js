import React from "react";
import { Formik, Field, Form } from "formik";
import classes from "../../styles/Checkout.module.css";

function Checkout({ onCancel, onConfirm }) {
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
      onSubmit={(props) => {
        // console.log(props.street);
        onConfirm({
          name: props.name,
          street: props.street,
          postalCode: props.postal,
          city: props.city,
        });
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <Field
              name="name"
              validate={validateName}
              className={`${classes.control} ${
                touched.name && classes.invalidInput
              }`}
            />
            {errors.name && touched.name && (
              <p className={classes.invalid}>{errors.name}</p>
            )}
          </div>

          <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <Field
              name="street"
              validate={validateStreet}
              className={`${classes.control} ${
                touched.street && classes.invalidInput
              }`}
            />
            {errors.street && touched.street && (
              <p className={classes.invalid}>{errors.street}</p>
            )}
          </div>

          <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <Field
              name="postal"
              validate={validatePostal}
              className={`${classes.control} ${
                touched.name && classes.invalidInput
              }`}
            />
            {errors.postal && touched.postal && (
              <p className={classes.invalid}>{errors.postal}</p>
            )}
          </div>

          <div className={classes.control}>
            <label htmlFor="city">City</label>
            <Field
              name="city"
              validate={validateCity}
              className={`${classes.control} ${
                touched.name && classes.invalidInput
              }`}
            />
            {errors.city && touched.city && (
              <p className={classes.invalid}>{errors.city}</p>
            )}
          </div>

          <div className={classes.actions}>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button className={classes.submit} type="submit">
              Confirm
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Checkout;
