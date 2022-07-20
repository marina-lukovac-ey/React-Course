import React, { useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(
  (
    { isValid, label, id, type, value, onBlurHandler, onChangeHandler },
    ref
  ) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        //all data that can be accessed outside...
        focus: activate, //point on activate when focus is called upon
      };
    });
    return (
      <div
        className={`${styles.control} ${
          isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
    );
  }
);
export default Input;
