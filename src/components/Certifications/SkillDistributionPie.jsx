// src/components/Charts/SkillDistributionPie.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

/* ------  data & colours  ------ */
const data = [
  { name: "Data",                value: 31, color: "#6C3EF6" },
  { name: "Security (Red)",      value: 21, color: "#E74C3C" },
  { name: "Software Dev",        value:  6, color: "#003F87" },
  { name: "Security (Orange)",   value: 15, color: "#F5A623" },
  { name: "Cloud (Green)",       value:  7, color: "#2ECC71" },
  { name: " (Blue-Grey)",   value:  4, color: "#34495E" },
  { name: "IT Ops",              value:  8, color: "#BDC3C7" },
  { name: "Governance",          value:  9, color: "#0B3D91" },
  { name: "",               value:  1, color: "#8ECAE6" },
];

/* helper to position the label nicely */
const renderLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, percent, name } = props;
  const RADIAN = Math.PI / 180;
  const radius  = outerRadius * 0.75; // position label ~75% radius
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fill="#fff"
      style={{ pointerEvents: "none" }}
    >
      {`${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function SkillDistributionPie() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-3/4 h-96"
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="1%"
            outerRadius="100%"
            paddingAngle={2}
            dataKey="value"
            label={renderLabel}       /* <- in-sector legend */
            labelLine={false}
            isAnimationActive
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          {/* Tooltip kept for hover detail – remove if unwanted */}
          <Tooltip formatter={(v) => `${v}%`} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default SkillDistributionPie;
