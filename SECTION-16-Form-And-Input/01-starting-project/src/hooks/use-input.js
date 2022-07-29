import { useReducer } from "react";

const reducerInput = (state, action) => {
  if (action.type === "TOUCH") {
    return { inputValue: state.inputValue, inputTouched: true };
  } else if (action.type === "TYPE") {
    return { inputValue: action.value, inputTouched: state.inputTouched };
  }
  return { inputValue: "", inputTouched: false };
};

const useInput = (validator) => {
  const [inputState, dispatchInput] = useReducer(reducerInput, {
    inputValue: "",
    inputTouched: false,
  });

  const { inputValue, inputTouched } = inputState;

  const isValid = validator(inputValue);
  const invalidInput = !isValid && inputTouched;

  const inputBlurChangeHandler = () => {
    dispatchInput({ type: "TOUCH" });
  };
  const enteredInputChangeHandler = (e) => {
    dispatchInput({ type: "TYPE", value: e.target.value });
  };
  const resetState = () => {
    dispatchInput({ type: "RESET" });
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
