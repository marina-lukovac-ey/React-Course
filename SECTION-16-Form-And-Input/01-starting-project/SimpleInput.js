//piece of art Custom Input Component...
const SimpleInput = (props) => {
  const { data, labelId, validationMessage, type } = props;
  const {
    inputValue,
    invalidInput,
    enteredInputChangeHandler,
    inputBlurChangeHandler,
  } = data;
  return (
    <div className="form-control">
      <label htmlFor={labelId}>{props.children}</label>
      <input
        type={type}
        id={labelId}
        value={inputValue}
        onChange={enteredInputChangeHandler}
        onBlur={inputBlurChangeHandler}
      />
      {invalidInput && <p className="error-text">{validationMessage}</p>}
    </div>
  );
};

export default SimpleInput;
