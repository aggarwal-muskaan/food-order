import React from "react";
import ReactDOM from "react-dom";
import classes from "../../styles/Modal.module.css";

const overlay = document.getElementById("modal-overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClickBackdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClickBackdrop={props.onClose} />,
        overlay
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
}

export default Modal;
