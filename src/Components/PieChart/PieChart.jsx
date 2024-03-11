import Pie from "./Pie";
import "./PieChart.css";
const PieChart = () => {
  return (
    <>
      <h1>Pie Chart</h1>
      <div className="pieChart">
        <Pie scheme={"nivo"} />
        <Pie scheme={"red_purple"} />
        <Pie scheme={"paired"} />
      </div>
    </>
  );
};

export default PieChart;
