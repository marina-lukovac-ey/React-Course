import styles from "./Input.module.css";

const Input = ({
  isValid,
  label,
  id,
  type,
  value,
  onBlurHandler,
  onChangeHandler,
}) => {
  return (
    <div className={`${styles.control} ${!isValid ? styles.invalid : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
};
export default Input;
