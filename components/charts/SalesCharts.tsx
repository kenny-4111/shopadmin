"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "@/data/sales";

export default function SalesChart() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-white p-4 text-gray-700 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">
        Monthly Sales
      </h2>

      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#000"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
