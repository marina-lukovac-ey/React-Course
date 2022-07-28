import useInput from "../hooks/use-input";
import { enteredEmailIsValid, enteredNameIsValid } from "../validation";

const SimpleInput = (props) => {
  const inputNameData = useInput(enteredNameIsValid);
  const inputEmailData = useInput(enteredEmailIsValid);
  let formIsValid = false;
  if (inputEmailData.isValid && inputEmailData.isValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      console.log("submit form and reset all");
      inputNameData.resetState();
      inputEmailData.resetState();
    } else {
      console.log("redo");
    }
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameData.inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={inputNameData.inputValue}
          type="text"
          id="name"
          onChange={inputNameData.enteredInputChangeHandler}
          onBlur={inputNameData.inputBlurChangeHandler}
        />
        {inputNameData.invalidInput && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={inputEmailData.inputClasses}>
        <label htmlFor="email">E-Mail</label>
        <input
          value={inputEmailData.inputValue}
          type="email"
          id="email"
          onChange={inputEmailData.enteredInputChangeHandler}
          onBlur={inputEmailData.inputBlurChangeHandler}
        />
        {inputEmailData.invalidInput && (
          <p className="error-text">Enter valid E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
