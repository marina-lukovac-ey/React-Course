import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import FormButton from "./FormButton";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() + Math.random()).toString(),
    };
    onAddExpense(expenseData);
  };
  const showFormHandler = (e) => {
    console.log(e);
    setFormIsOpen((prev) => {
      let temp = prev;
      return !temp;
    });
  };
  let formField = (
    <FormButton onClickFormHandler={showFormHandler} formIsOpen={formIsOpen} />
  );
  if (formIsOpen) {
    formField = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClickFormHandler={showFormHandler}
        formIsOpen={formIsOpen}
      />
    );
  }

  return <div className="new-expense">{formField}</div>;
};
export default NewExpense;
