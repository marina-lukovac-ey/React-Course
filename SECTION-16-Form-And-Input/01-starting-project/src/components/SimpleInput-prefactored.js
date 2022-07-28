import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredNameValue, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //this is only a tweak for the error rendering in the begining,
  //not so good for readibility or if logic is needed for
  //sending a request to the server...
  //Max solution to this: only use these two states and make
  //enteredNameIsValid a constant
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  //these 2 work together...
  const enteredNameIsValid = enteredNameValue.trim();
  const invalidInputName = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmailValue, setEnteredEmailValue] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const enteredEmailIsValid = enteredEmailValue
    .trim()
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const invalidInputEmail = !enteredEmailIsValid && emailInputTouched;

  const onEmailBlurChangeHandler = () => {
    setEmailInputTouched(true);
  };

  const enteredEmailInputChangeHandler = (e) => {
    setEmailInputTouched(true);
    setEnteredEmailValue(e.target.value);
  };

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onNameBlurChangeHandler = () => {
    setEnteredNameTouched(true);
  };

  const enteredNameInputChangeHandler = (e) => {
    setEnteredNameTouched(true);
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      console.log("submit form and reset all");
    } else {
      console.log("redo");
    }
  };
  //simpler to only check that in the start of component...
  //and not to create formIsValidState but a variable!!!
  /*
  useEffect(() => {
    if (enteredNameIsValid) {
      //&& enteredAgeIsValid && enteredEMailIsValid
      setFormIsValid(true);
    } else setFormIsValid(false);
  }, [enteredNameIsValid]);
  */

  const nameInputClasses = `form-control ${invalidInputName ? "invalid" : ""}`;
  const emailInputClasses = `form-control ${
    invalidInputEmail ? "invalid" : ""
  }`;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredNameValue}
          type="text"
          id="name"
          onChange={enteredNameInputChangeHandler}
          onBlur={onNameBlurChangeHandler}
        />
        {invalidInputName && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredEmailValue}
          type="text"
          id="name"
          onChange={enteredEmailInputChangeHandler}
          onBlur={onEmailBlurChangeHandler}
        />
        {invalidInputEmail && <p className="error-text">Enter valid E-mail.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
