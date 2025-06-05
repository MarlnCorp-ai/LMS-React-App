// src/components/Charts/PeerEngageBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";

/* --------  data & colours copied from the screenshot  -------- */
const data = [
  { name: "Governance, Risk and Compliance", value: 34, color: "#002B5B" },
  { name: "Generative AI", value: 55, color: "#8BC34A" },
  { name: "Project Management", value: 87, color: "#4CAF50" },
  { name: "Business Analytics", value: 45, color: "#E74C3C" },
  { name: "Cybersecurity Essentials", value: 68, color: "#F5A623" },
  { name: "Risk Management", value: 32, color: "#F4B400" },
  { name: "Qlik", value: 8, color: "#E91E63" },
  { name: "Big Data", value: 9, color: "#9C27B0" },
  { name: "Data", value: 6, color: "#03A9F4" },
  { name: "ETHICAL HACKING", value: 10, color: "#4FC3F7" },
];

function PeerEngageBarChart() {
  return (
    <div>
      <header className="text-center">
        <h2 className="text-xl font-bold">Peer Engage</h2>
        <p className="text-lg mt-4 mb-10">How many employees have been certified in</p>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-3/4 h-[480px]"
      >
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              type="number"
              domain={[0, "dataMax + 10"]}
              tickFormatter={(v) => `${v}`}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={150}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Bar dataKey="value" isAnimationActive radius={[4, 4, 4, 4]}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
              <LabelList
                dataKey="value"
                position="right"
                offset={10}
                style={{ fontWeight: 600, fill: "#333" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

export default PeerEngageBarChart;
