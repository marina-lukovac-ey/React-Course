import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
          <div className={styles.actions}>
            <Button
              onClick={() => {
                props.setShowModal({ show: false, message: "" });
              }}
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ErrorModal;
