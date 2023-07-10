import { PieChart, Pie, Cell, Text, ResponsiveContainer } from "recharts";

const data = [{ name: "12 %", value: 400 }];

export const CircleCharts = () => {
  return (
    <ResponsiveContainer>
      <PieChart width={400} height={200}>
        <Pie
          data={data}
          outerRadius={10}
          cx={80}
          cy={150}
          animationBegin={400}
          labelLine={false}
          fill="#FFFFFF"
        ></Pie>
        <Pie
          data={data}
          cx={80}
          cy={150}
          innerRadius={20}
          outerRadius={85}
          cornerRadius={10}
          paddingAngle={50}
          startAngle={60}
          dataKey="value"
          animationBegin={400}
          labelLine={false}
          label={(entry) => (
            <Text
              x={139}
              y={140}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={25}
              fill="#ffffff"
            >
              {entry.name}
            </Text>
          )}
        >
          <Cell fill="#ffffff" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
