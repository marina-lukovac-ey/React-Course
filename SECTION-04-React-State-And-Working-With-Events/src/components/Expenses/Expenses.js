import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("2020");
  console.log(pickedYear);
  const yearUpdated = (year) => {
    setPickedYear(year);
  };
  return (
    <div>
      <ExpensesFilter onYearSelection={yearUpdated} selected={pickedYear} />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.price}
            date={expense.time}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
