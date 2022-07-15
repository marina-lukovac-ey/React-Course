import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Augt", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //starting from 0
    chartDataPoints[expenseMonth].value += expense.amount; //bracket notation... great use
  }
  console.log(chartDataPoints);
  //go through all the diff expenses:
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
