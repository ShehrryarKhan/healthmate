import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, FileText, Upload, HeartPulse } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Dialog } from "@headlessui/react";

export default function DashboardHome() {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);

  const vitalsData = [
    { date: "Oct 10", BP: 120, Sugar: 95 },
    { date: "Oct 11", BP: 125, Sugar: 100 },
    { date: "Oct 12", BP: 130, Sugar: 105 },
    { date: "Oct 13", BP: 122, Sugar: 97 },
    { date: "Oct 14", BP: 118, Sugar: 90 },
  ];

  const recentReports = [
    {
      title: "Blood Test Report",
      date: "Oct 10, 2025",
      status: "Analyzed",
      summary:
        "Hemoglobin and WBC levels are within normal range. Slight Vitamin D deficiency detected.",
    },
    {
      title: "X-Ray Chest",
      date: "Sep 25, 2025",
      status: "Pending",
      summary: "Report not yet analyzed by AI. Please check back later.",
    },
    {
      title: "Urine Test",
      date: "Aug 12, 2025",
      status: "Analyzed",
      summary:
        "Normal urine composition. No infection indicators. Hydration level good.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-green-700">
            Welcome to HealthMate 💚
          </h1>
          <p className="text-gray-600 mt-1">
            Your personal health companion. Stay informed, stay healthy.
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/upload")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm shadow"
        >
          + Upload Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg text-green-700">
            <Activity size={26} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Reports Uploaded</h3>
            <p className="text-2xl font-bold text-green-700">12</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
            <FileText size={26} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">AI Insights</h3>
            <p className="text-2xl font-bold text-blue-700">8</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
            <HeartPulse size={26} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Tracked Vitals</h3>
            <p className="text-2xl font-bold text-yellow-700">5</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-lg text-red-600">
            <Upload size={26} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Pending Uploads</h3>
            <p className="text-2xl font-bold text-red-700">2</p>
          </div>
        </div>
      </div>

      {/* Vitals Trend Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Recent Health Trends
        </h3>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <LineChart data={vitalsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="BP"
                stroke="#16a34a"
                strokeWidth={2}
                name="Blood Pressure"
              />
              <Line
                type="monotone"
                dataKey="Sugar"
                stroke="#2563eb"
                strokeWidth={2}
                name="Sugar Level"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-green-700">
            Recent Reports
          </h3>
          <a
            href="/dashboard/reports"
            className="text-green-600 hover:underline text-sm"
          >
            View All →
          </a>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="pb-2">Report Name</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((r, i) => (
              <tr
                key={i}
                onClick={() => setSelectedReport(r)}
                className="border-b cursor-pointer hover:bg-green-50 transition"
              >
                <td className="py-3 font-medium">{r.title}</td>
                <td className="py-3 text-gray-500">{r.date}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      r.status === "Analyzed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      <Dialog
        open={!!selectedReport}
        onClose={() => setSelectedReport(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <Dialog.Title className="text-xl font-bold text-green-700 mb-3">
              {selectedReport?.title}
            </Dialog.Title>
            <p className="text-gray-500 text-sm mb-1">
              Date: {selectedReport?.date}
            </p>
            <p className="text-sm mb-4">
              Status:{" "}
              <span
                className={`px-2 py-1 rounded text-xs ${
                  selectedReport?.status === "Analyzed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {selectedReport?.status}
              </span>
            </p>

            <div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700 mb-4">
              <p>{selectedReport?.summary}</p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedReport(null)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
