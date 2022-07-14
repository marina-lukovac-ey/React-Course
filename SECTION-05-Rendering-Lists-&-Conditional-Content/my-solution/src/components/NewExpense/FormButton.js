const FormButton = ({ formIsOpen, onClickFormHandler }) => {
  return (
    <button onClick={onClickFormHandler}>
      {formIsOpen ? "Cancel" : "Add New Expense"}
    </button>
  );
};
export default FormButton;
