import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("all");
  const yearUpdated = (year) => {
    setPickedYear(year);
  };
  const filteredExpenses =
    pickedYear === "all"
      ? [...expenses]
      : expenses.filter(
          (expense) => expense.date.getFullYear().toString() === pickedYear
        );

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter onYearSelection={yearUpdated} selected={pickedYear} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
