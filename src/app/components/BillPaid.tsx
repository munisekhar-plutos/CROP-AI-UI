'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', amount: 50000 },
  { name: 'Feb', amount: 90000 },
  { name: 'Mar', amount: 70000 },
  { name: 'Apr', amount: 120000 },
  { name: 'May', amount: 95000 },
  { name: 'Jun', amount: 60000 },
];

export default function BillPaid() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-lg font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Bill Paid</h2>
          <p className="text-gray-500 text-sm">Subtitle goes here</p>
        </div>
        <select className="border p-2 rounded text-sm bg-white shadow-sm focus:outline-none">
          <option>Last 6 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="90%" height={230}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-sm font-medium" />
          <YAxis tickFormatter={(value) => ` ₹${value.toLocaleString()}`} axisLine={false} tickLine={false} className="text-sm font-medium" />
          <Tooltip formatter={(value) => ` ₹${value.toLocaleString()}`} cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
          <Bar dataKey="amount" fill="#2563eb" barSize={40} radius={[6, 6, 0, 0]} label={{ position: 'top', fill: '#000', fontSize: 12, fontWeight: 'bold', fontFamily: 'sans-serif' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}