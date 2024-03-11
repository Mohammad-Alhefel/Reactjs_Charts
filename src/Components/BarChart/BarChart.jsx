import Bar from "./Bar";

const BarChart = () => {
  return (
    <>
      <h1>Bar Chart</h1>
      <div>
        <Bar scheme={"dark2"} />
        <Bar scheme={"nivo"} />
      </div>
    </>
  );
};

export default BarChart;
