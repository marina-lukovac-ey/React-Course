import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <React.Fragment>
          <aside
            className={classes.backdrop}
            onClick={props.closeModal}
          ></aside>
          <dialog open className={classes.modal}>
            {props.children}
          </dialog>
        </React.Fragment>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
