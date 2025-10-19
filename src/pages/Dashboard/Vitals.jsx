import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Vitals() {
  const [vitals, setVitals] = useState([]);
  const [form, setForm] = useState({ type: "BP", value: "" });

  const addVital = (e) => {
    e.preventDefault();
    if (!form.value) return;
    const newVital = {
      ...form,
      date: new Date().toLocaleDateString(),
    };
    setVitals([...vitals, newVital]);
    setForm({ type: form.type, value: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Health Vitals
      </h2>

      {/* Add Vital Form */}
      <form
        onSubmit={addVital}
        className="bg-white shadow p-4 rounded-lg flex gap-2 items-center mb-6"
      >
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded"
        >
          <option>BP</option>
          <option>Sugar</option>
          <option>Weight</option>
        </select>
        <input
          type="text"
          placeholder="Value"
          className="border p-2 rounded flex-1"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add
        </button>
      </form>

      {/* Vitals Chart */}
      {vitals.length > 0 ? (
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            {form.type} Trend
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={vitals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">
          No vitals added yet. Add your first entry above 👆
        </p>
      )}
    </div>
  );
}
