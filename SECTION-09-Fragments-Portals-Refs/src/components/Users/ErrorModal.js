import React from "react"; //no need
import ReactDOM from "react-dom"; //maybe no need?
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ showModal, modalHandler }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{showModal.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{showModal.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={modalHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal({ showModal, modalHandler }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={modalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay showModal={showModal} modalHandler={modalHandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
export default ErrorModal;
