import React, { useRef } from "react";
import MInput from "../UI/MInput";
import classes from "../../styles/MItemForm.module.css";

function MItemForm(props) {
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmt = amountRef.current.value.trim();
    if (enteredAmt) props.formSubmit(+enteredAmt);
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <MInput
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MItemForm;
