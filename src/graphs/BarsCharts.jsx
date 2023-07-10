import { Bar, ResponsiveContainer, BarChart } from "recharts";
const data = [
  {
    name: "100 %",
    uv: 590,
    pv: 1200,
  },
  {
    name: "50 %",
    uv: 868,
    pv: 600,
  },
  {
    name: "75 %",
    uv: 1397,
    pv: 900,
  },
];

export const BarsCharts = () => {
  return (
    <ResponsiveContainer width={310} height={270}>
      <BarChart
        data={data}
        margin={{
          top: 60,
          right: 60,
          left: 90,
          bottom: 5,
        }}
      >
        <Bar
          dataKey="pv"
          barSize={28}
          fill="#d63953"
          radius={50}
          animationBegin={500}
          background={{ fill: "#d6d8da", radius: 50, animationBegin: 500 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
