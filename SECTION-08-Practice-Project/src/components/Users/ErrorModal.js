import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";
function ErrorModal({ showModal, setShowModal }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{showModal.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{showModal.message}</p>
          <div className={styles.actions}>
            <Button
              onClick={() => {
                setShowModal({
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
