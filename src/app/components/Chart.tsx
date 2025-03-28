"use client"; // Required for Recharts in Next.js

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  { name: "Electricity", value: 29 },
  { name: "Water Bills", value: 3 },
  { name: "Rent", value: 40 },
  { name: "Groceries", value: 15 },
  { name: "Entertainment", value: 13 },
];

const COLORS = ["#1E40AF", "#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

export default function BudgetChart() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-4 border border-gray-300 rounded-xl max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Title here</h2>
          <p className="text-gray-500 text-sm">Subtitle goes here</p>
        </div>
        <button
          className="border border-gray-300 px-3 py-1 text-sm rounded-md"
          onClick={() => setDate(new Date())}
        >
          {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </button>
      </div>

      <PieChart width={260} height={250}>
        <Pie data={data} cx="60%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>  
        <Tooltip />
      </PieChart>

      <p className="text-center mt-4 font-medium text-gray-700">
        You have spent <b>29%</b> of your budget on Electricity Bills
      </p>
      <p className="text-center text-gray-500 text-sm">
        Water Bills increased by <b>3%</b> this month
      </p>
    </div>
  );
}
    