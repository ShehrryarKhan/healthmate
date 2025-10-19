import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, FileText, Upload, Activity, LogOut } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { name: "Home", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Reports", path: "/dashboard/reports", icon: <FileText size={18} /> },
    { name: "Upload", path: "/dashboard/upload", icon: <Upload size={18} /> },
    { name: "Vitals", path: "/dashboard/vitals", icon: <Activity size={18} /> },
  ];

  return (
    <div
      className={`flex min-h-screen transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-64 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md p-5 flex flex-col justify-between`}
      >
        <div>
          <h1 className="text-2xl font-bold text-green-600 mb-6">
            HealthMate 💚
          </h1>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-green-100 text-green-700 font-semibold"
                    : darkMode
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          className="flex items-center gap-2 text-red-500 hover:text-red-600 mt-6"
          onClick={() => (window.location.href = "/login")}
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header
          className={`flex justify-between items-center px-6 py-3 shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold text-green-700">Dashboard</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 text-sm"
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </header>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
