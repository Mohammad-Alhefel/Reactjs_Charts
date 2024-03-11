import Line from "./Line";
import "./LineChart.css";
const LineChart = () => {
  return (
    <>
      <h1>Line Chart</h1>
      <div className="lineChart">
        <Line scheme={"red_purple"} />
      </div>
    </>
  );
};

export default LineChart;
