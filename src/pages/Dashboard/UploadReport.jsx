import { useState } from "react";
import { FileUp, FileText } from "lucide-react";

export default function UploadReport() {
  const [report, setReport] = useState({
    title: "",
    date: "",
    file: null,
    preview: null,
  });
  const [uploadedReports, setUploadedReports] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReport({
        ...report,
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!report.title || !report.date || !report.file) {
      alert("Please fill all fields and select a file");
      return;
    }
    const newReport = {
      ...report,
      id: Date.now(),
    };
    setUploadedReports([...uploadedReports, newReport]);
    setReport({ title: "", date: "", file: null, preview: null });
    alert("✅ Report uploaded successfully!");
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-green-700">Upload Medical Report</h2>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-5 max-w-lg"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Report Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            placeholder="e.g. Blood Test Report"
            value={report.title}
            onChange={(e) =>
              setReport({ ...report, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            value={report.date}
            onChange={(e) =>
              setReport({ ...report, date: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Upload File (PDF or Image)
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            className="w-full border p-2 rounded cursor-pointer"
            onChange={handleFileChange}
          />
        </div>

        {/* Preview */}
        {report.preview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            {report.file.type.includes("pdf") ? (
              <iframe
                src={report.preview}
                title="PDF Preview"
                className="w-full h-64 border rounded"
              />
            ) : (
              <img
                src={report.preview}
                alt="Report Preview"
                className="w-full h-64 object-cover rounded border"
              />
            )}
          </div>
        )}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          <FileUp size={18} />
          Upload Report
        </button>
      </form>

      {/* Uploaded Reports Section */}
      {uploadedReports.length > 0 && (
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
            <FileText size={20} />
            Uploaded Reports
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="pb-2">Title</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">File</th>
              </tr>
            </thead>
            <tbody>
              {uploadedReports.map((r) => (
                <tr key={r.id} className="border-b">
                  <td className="py-2 font-medium">{r.title}</td>
                  <td className="py-2 text-gray-500">{r.date}</td>
                  <td className="py-2">
                    <a
                      href={r.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      View File
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
