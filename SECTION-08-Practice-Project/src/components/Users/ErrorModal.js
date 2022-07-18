import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.showModal.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.showModal.message}</p>
          <div className={styles.actions}>
            <Button
              onClick={() => {
                props.setShowModal({
                  show: false,
                  message: "",
                  title: "",
                });
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
