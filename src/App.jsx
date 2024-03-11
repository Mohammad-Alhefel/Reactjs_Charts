import BarChart from "./Components/BarChart/BarChart";
import LineChart from "./Components/LineChart/LineChart";
import PieChart from "./Components/PieChart/PieChart";

const App = () => {
  return (
    <div className="main">
      <PieChart />
      <LineChart />
      <BarChart />
    </div>
  );
};

export default App;
