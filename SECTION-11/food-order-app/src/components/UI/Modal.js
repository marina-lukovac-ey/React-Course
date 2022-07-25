import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

import React from "react";

const Backdrop = (props) => {
  return (
    <div onClick={props.onShowHideCart} className={classes.backdrop}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onShowHideCart={props.onShowHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
