import { useState } from "react";

const useInput = (validator, defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validator(inputValue);
  const invalidInput = !isValid && inputTouched;

  const inputBlurChangeHandler = () => {
    setInputTouched(true);
  };

  const enteredInputChangeHandler = (e) => {
    setInputTouched(true);
    setInputValue(e.target.value);
  };
  const resetState = () => {
    setInputValue(defaultValue);
    setInputTouched(false);
  };

  const inputClasses = `form-control ${invalidInput ? "invalid" : ""}`;
  return {
    inputValue,
    isValid,
    inputClasses,
    invalidInput,
    enteredInputChangeHandler,
    inputBlurChangeHandler,
    resetState,
  };
};
export default useInput;
