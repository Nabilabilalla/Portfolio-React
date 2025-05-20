/* eslint-disable no-unused-vars */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "Figma", usage: 80 },
  { name: "Canva", usage: 90 },
  { name: "Photoshop", usage: 90 },
  { name: "Filmora9", usage: 70 },
  { name: "Illustrator", usage: 60 },
  { name: "Premiere Pro", usage: 55 },
  { name: "Adobe XD", usage: 70 },
  { name: "Slack", usage: 55 },
  { name: "CapCut", usage: 80 },
  { name: "Adobe Pro", usage: 70 }
];

// Couleur principale + dégradé doux
const baseColor = "#1976d2"; // Bleu Material UI
const lightShades = [
  "#1976d2",
  "#1e88e5",
  "#2196f3",
  "#42a5f5",
  "#64b5f6",
  "#90caf9",
  "#bbdefb",
  "#e3f2fd",
  "#1565c0",
  "#0d47a1"
];

export default function ToolUsageChart() {
  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="usage" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={lightShades[index % lightShades.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
