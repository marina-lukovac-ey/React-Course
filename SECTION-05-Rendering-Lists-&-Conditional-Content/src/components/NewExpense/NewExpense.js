import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
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

  const startEditingHandler = () => {
    setFormIsOpen(true);
  };
  const stopEditingHandler = () => {
    setFormIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!formIsOpen && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {formIsOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCloseForm={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
