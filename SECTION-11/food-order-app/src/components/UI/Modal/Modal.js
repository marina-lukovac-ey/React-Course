import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <aside className={classes.backdrop} onClick={props.closeModal}>
          <dialog open className={classes.modal}>
            {props.children}
          </dialog>
        </aside>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
