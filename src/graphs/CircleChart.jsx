import { PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
  { name: "Group F", value: 200 },
  { name: "Group G", value: 200 },
];

const COLORS = [
  "#e5e5e6",
  "#b8e3ed",
  "#7bd3e9",
  "#3ec2e4",
  "#0db2df",
  "#1183b6",
  "#17568e",
];

export const CircleChart = () => {
  const isDesktop = window.innerWidth >= 1024;
  const animationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isDesktop ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <PieChart width={230} height={220}>
        <Pie
          data={data}
          cx={110}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          paddingAngle={0}
          startAngle={360}
          endAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </motion.div>
  );
};
