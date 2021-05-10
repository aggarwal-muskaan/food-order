import React from "react";
import classes from "../../styles/MCard.module.css";

function MCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default MCard;
