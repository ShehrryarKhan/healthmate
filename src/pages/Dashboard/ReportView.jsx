import { useParams, Link } from "react-router-dom";

export default function ReportView() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Report Details
      </h2>
      <div className="bg-white shadow p-6 rounded-lg">
        <p className="text-gray-600 mb-4">
          Viewing medical report ID: <b>{id}</b>
        </p>
        <div className="border p-4 rounded bg-gray-50">
          <p className="text-gray-700">
            (Here you can show PDF/Image preview and AI summary later.)
          </p>
        </div>
        <Link
          to="/dashboard/reports"
          className="inline-block mt-6 text-green-600 hover:underline"
        >
          ← Back to Reports
        </Link>
      </div>
    </div>
  );
}
