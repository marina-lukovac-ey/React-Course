import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  //this data should be retrieved from a DB
  {
    id: "2",
    title: "Coctail Glass",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "3",
    title: "Laptop",
    amount: 750,
    date: new Date(2020, 2, 28),
  },
  {
    id: "1",
    title: "Toilet Paper",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "4",
    title: "Mechanical Keyboard",
    amount: 46,
    date: new Date(2022, 5, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA.reverse());
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); // not really correct
    //this is a place to send data to a DB
    setExpenses((prev) => [expense, ...prev]); ///object must be in the parentheses because obj literal is treated like an arrow function
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
/* old syntax: What acctually happens whenever JSX is written...
return React.createElement(
  'div',
  {},
  React.createElement('h2',{},"Let's get started!")), //1st element, 2nd props object, 3rd between tag content
  React.createElement(Expenses, {items: expenses})
);
*/
