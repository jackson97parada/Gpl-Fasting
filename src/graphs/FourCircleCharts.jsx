import { PieChart, Pie, Text } from "recharts";

const data = [{ name: "75", value: 400 }];
const dataT = [{ name: "50", value: 400 }];
const dataTh = [{ name: "25", value: 400 }];
const dataF = [{ name: "100", value: 400 }];

export const FourCircleCharts = () => {
  return (
    <div className="grid grid-cols-2">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#adafb2"
          dataKey="value"
          labelLine={false}
          label={(entry) => (
            <Text
              x={47}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={28}
              fill="#d63953"
            >
              {entry.name}
            </Text>
          )}
        />
        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#d63953"
          startAngle={90}
          paddingAngle={80}
          dataKey="value"
          label={() => (
            <Text
              x={70}
              y={45}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#d63953"
            >
              %
            </Text>
          )}
          labelLine={false}
        />
      </PieChart>
      <PieChart width={100} height={100}>
        <Pie
          data={dataT}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#adafb2"
          dataKey="value"
          labelLine={false}
          label={(entry) => (
            <Text
              x={47}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={28}
              fill="#d63953"
            >
              {entry.name}
            </Text>
          )}
        />
        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#d63953"
          startAngle={90}
          endAngle={270}
          paddingAngle={80}
          dataKey="value"
          label={() => (
            <Text
              x={70}
              y={45}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#d63953"
            >
              %
            </Text>
          )}
          labelLine={false}
        />
      </PieChart>
      <PieChart width={100} height={100}>
        <Pie
          data={dataTh}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#adafb2"
          dataKey="value"
          labelLine={false}
          label={(entry) => (
            <Text
              x={47}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={28}
              fill="#d63953"
            >
              {entry.name}
            </Text>
          )}
        />
        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#d63953"
          startAngle={90}
          endAngle={180}
          paddingAngle={80}
          dataKey="value"
          label={() => (
            <Text
              x={70}
              y={45}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#d63953"
            >
              %
            </Text>
          )}
          labelLine={false}
        />
      </PieChart>
      <PieChart width={100} height={100}>
        <Pie
          data={dataF}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#adafb2"
          dataKey="value"
          labelLine={false}
          label={(entry) => (
            <Text
              x={47}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={25}
              fill="#d63953"
            >
              {entry.name}
            </Text>
          )}
        />
        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={37}
          fill="#d63953"
          startAngle={0}
          dataKey="value"
          label={() => (
            <Text
              x={72}
              y={45}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#d63953"
            >
              %
            </Text>
          )}
          labelLine={false}
        />
      </PieChart>
    </div>
  );
};
