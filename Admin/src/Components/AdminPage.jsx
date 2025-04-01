import React, { useState } from "react";
import AddStudents from "../pages/AddStudents";
import IssueCertificate from "../pages/IssueCertificate";
import RegisterFranchise from "../pages/RegisterFranchise";
import ListStudents from "../pages/ListStudents";
import ListFranchise from "../pages/ListFranchise";
import Dashboard from "../pages/Dashboard";

const AdminPage = () => {
  const [activePage, setActivePage] = useState("Dashboard"); // ✅ Fix: Default page is Dashboard

  // Function to render the selected page
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "AddStudents":
        return <AddStudents />;
      case "IssueCertificate":
        return <IssueCertificate />;
      case "RegisterFranchise":
        return <RegisterFranchise />;
      case "ListStudents":
        return <ListStudents />;
      case "ListFranchise":
        return <ListFranchise />;
      default:
        return <Dashboard />; // ✅ Ensure Dashboard is the fallback
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Dashboard</h2>
        <hr className="mb-4" />

        <ul className="space-y-4">
          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "Dashboard" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("Dashboard")} // ✅ Fix: Removed extra space
          >
            🏠 Dashboard
          </li>

          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "AddStudents" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("AddStudents")}
          >
            ➕ Add Students
          </li>

          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "IssueCertificate" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("IssueCertificate")}
          >
            🎓 Issue Certificate
          </li>
          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "RegisterFranchise" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("RegisterFranchise")}
          >
            🏢 Register Franchise
          </li>
          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "ListStudents" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("ListStudents")}
          >
            📜 List Students
          </li>
          <li
            className={`cursor-pointer text-lg font-medium p-2 rounded-md hover:bg-blue-200 ${
              activePage === "ListFranchise" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("ListFranchise")}
          >
            📋 List Franchise
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">{renderPage()}</div>
    </div>
  );
};

export default AdminPage;
