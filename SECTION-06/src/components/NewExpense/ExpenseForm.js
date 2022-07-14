import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onClickCloseForm }) => {
  const today = new Date(); //.toISOString().slice(0, 10); //is there any better way???
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState(today);
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: today,
  });
  const displayDate = userInput.date.toISOString().slice(0, 10);
  const titleChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, title: e.target.value }));
  };
  const datePickHandler = (e) => {
    setUserInput((prev) => ({
      ...prev,
      date: new Date(e.target.value), //.toISOString().slice(0, 10),
    }));
  };
  const amountChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, amount: e.target.value }));
    // setUserInput(e.target.value); // this value is always a string.. NOTE
  };
  const submitHandler = (e) => {
    //prevent reloading page but stay there and handle
    e.preventDefault();
    const expenseData = userInput;
    onSaveExpenseData(expenseData); //this line of code: Lifting The state up...
    setUserInput({ title: "", date: today, amount: "" });
    onClickCloseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={datePickHandler}
            value={displayDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onClickCloseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
