import useInput from "../hooks/use-input";
import { enteredEmailIsValid, enteredNameIsValid } from "../validation";
import SimpleInput from "./SimpleInput";

const BasicForm = (props) => {
  const inputFirstNameData = useInput(enteredNameIsValid);
  const inputLastNameData = useInput(enteredNameIsValid);
  const inputEmailData = useInput(enteredEmailIsValid);
  let formIsValid = false;
  if (
    inputFirstNameData.isValid &&
    inputLastNameData.isValid &&
    inputEmailData.isValid
  ) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      console.log("submit form and reset all");
      inputFirstNameData.resetState();
      inputLastNameData.resetState();
      inputEmailData.resetState();
    } else {
      console.log("redo");
    }
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <SimpleInput
          data={inputFirstNameData}
          labelId={"first-name"}
          validationMessage={"First name must not be empty."}
          type={"text"}
        >
          First Name
        </SimpleInput>
        <SimpleInput
          data={inputLastNameData}
          labelId={"last-name"}
          validationMessage={"Last name must not be empty."}
          type={"text"}
        >
          Last Name
        </SimpleInput>
      </div>
      <SimpleInput
        data={inputEmailData}
        labelId={"last-name"}
        validationMessage={"Enter valid E-mail."}
        type={"text"}
      >
        E-mail
      </SimpleInput>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
