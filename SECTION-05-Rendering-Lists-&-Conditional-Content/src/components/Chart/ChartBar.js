import "ChartBar.css";

const ChartBar = ({ value, label, maxValue }) => {
  //for each month in the year
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        {/*  depends hight from value and max */}
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
export default ChartBar;
