import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ arrayOfDataPoints }) => {
  //how many data points with how much data
  return (
    <div className="chart">
      {arrayOfDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
