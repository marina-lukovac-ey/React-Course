import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "1",
      title: "Toilet Paper",
      price: 294.67,
      time: new Date(2021, 2, 28),
    },
    {
      id: "2",
      title: "Car Insuranse",
      price: 294.67,
      time: new Date(2021, 2, 28),
    },
    {
      id: "3",
      title: "Car Insuranse",
      price: 294.67,
      time: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "Car Insuranse",
      price: 294.67,
      time: new Date(2021, 2, 28),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App Component");
    console.log(expense);
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
