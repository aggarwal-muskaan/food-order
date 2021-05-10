import React from "react";
import classes from "../../styles/MInput.module.css";

function MInput(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}

export default MInput;
