import { Link } from "react-router-dom";

export default function ReportsList() {
  // Placeholder data
  const reports = [
    { id: 1, title: "Blood Test Report", date: "2025-10-10" },
    { id: 2, title: "X-Ray Chest", date: "2025-09-20" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Your Reports
      </h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-green-100">
            <tr>
              <th className="text-left p-3">Report Name</th>
              <th className="text-left p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="p-3">{r.title}</td>
                <td className="p-3">{r.date}</td>
                <td className="p-3 text-center">
                  <Link
                    to={`/dashboard/reports/${r.id}`}
                    className="text-green-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
