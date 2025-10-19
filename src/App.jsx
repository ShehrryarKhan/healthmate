import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./pages/Dashboard/Layout";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ReportsList from "./pages/Dashboard/ReportsList";
import ReportView from "./pages/Dashboard/ReportView";
import UploadReport from "./pages/Dashboard/UploadReport";
import Vitals from "./pages/Dashboard/Vitals";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard layout with nested routes */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardHome />} />
        <Route path="reports" element={<ReportsList />} />
        <Route path="reports/:id" element={<ReportView />} />
        <Route path="upload" element={<UploadReport />} />
        <Route path="vitals" element={<Vitals />} />
      </Route>
    </Routes>
  );
}

export default App;
