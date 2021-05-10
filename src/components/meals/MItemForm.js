import React from "react";
import MInput from "../UI/MInput";
import classes from "../../styles/MItemForm.module.css";

function MItemForm(props) {
  return (
    <form className={classes.form}>
      <MInput
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MItemForm;
