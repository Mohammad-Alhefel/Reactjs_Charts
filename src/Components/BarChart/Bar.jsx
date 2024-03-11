import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 97,
    "hot dogColor": "hsl(248, 70%, 50%)",
    burger: 82,
    burgerColor: "hsl(198, 70%, 50%)",
    sandwich: 189,
    sandwichColor: "hsl(246, 70%, 50%)",
    kebab: 14,
    kebabColor: "hsl(125, 70%, 50%)",
    fries: 29,
    friesColor: "hsl(17, 70%, 50%)",
    donut: 69,
    donutColor: "hsl(337, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 122,
    "hot dogColor": "hsl(37, 70%, 50%)",
    burger: 185,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 6,
    sandwichColor: "hsl(296, 70%, 50%)",
    kebab: 107,
    kebabColor: "hsl(305, 70%, 50%)",
    fries: 79,
    friesColor: "hsl(308, 70%, 50%)",
    donut: 183,
    donutColor: "hsl(56, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 137,
    "hot dogColor": "hsl(163, 70%, 50%)",
    burger: 46,
    burgerColor: "hsl(3, 70%, 50%)",
    sandwich: 52,
    sandwichColor: "hsl(41, 70%, 50%)",
    kebab: 117,
    kebabColor: "hsl(56, 70%, 50%)",
    fries: 181,
    friesColor: "hsl(102, 70%, 50%)",
    donut: 47,
    donutColor: "hsl(75, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 122,
    "hot dogColor": "hsl(349, 70%, 50%)",
    burger: 21,
    burgerColor: "hsl(259, 70%, 50%)",
    sandwich: 163,
    sandwichColor: "hsl(159, 70%, 50%)",
    kebab: 186,
    kebabColor: "hsl(101, 70%, 50%)",
    fries: 74,
    friesColor: "hsl(295, 70%, 50%)",
    donut: 162,
    donutColor: "hsl(4, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 72,
    "hot dogColor": "hsl(148, 70%, 50%)",
    burger: 90,
    burgerColor: "hsl(252, 70%, 50%)",
    sandwich: 158,
    sandwichColor: "hsl(232, 70%, 50%)",
    kebab: 169,
    kebabColor: "hsl(225, 70%, 50%)",
    fries: 58,
    friesColor: "hsl(173, 70%, 50%)",
    donut: 58,
    donutColor: "hsl(231, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 73,
    "hot dogColor": "hsl(50, 70%, 50%)",
    burger: 39,
    burgerColor: "hsl(355, 70%, 50%)",
    sandwich: 13,
    sandwichColor: "hsl(257, 70%, 50%)",
    kebab: 146,
    kebabColor: "hsl(132, 70%, 50%)",
    fries: 200,
    friesColor: "hsl(257, 70%, 50%)",
    donut: 6,
    donutColor: "hsl(62, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 137,
    "hot dogColor": "hsl(250, 70%, 50%)",
    burger: 179,
    burgerColor: "hsl(134, 70%, 50%)",
    sandwich: 95,
    sandwichColor: "hsl(218, 70%, 50%)",
    kebab: 0,
    kebabColor: "hsl(149, 70%, 50%)",
    fries: 29,
    friesColor: "hsl(73, 70%, 50%)",
    donut: 179,
    donutColor: "hsl(280, 70%, 50%)",
  },
];

const Bar = ({ scheme }) => {
  return (
    <div style={{ width: "1200px", height: "600px" }}>
      <ResponsiveBar
        data={data}
        colors={{ scheme: scheme }}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
};

export default Bar;
