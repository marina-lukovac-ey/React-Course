import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";

function ExpenseItem({ title, date, amount }) {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const [date, setDate] = useState(props.date);
  //every component has its own state // per component instance
  // const clickHandler = () => {
  //   setTitle("Changed title");
  //   console.log(title); //this is not changed value because the function didn't reexecute before this came to exectuion
  // };
  //props object... destructured...
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
