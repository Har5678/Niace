import React, { useState } from "react";
import AddStudents from "../pages/AddStudents";
import IssueCertificate from "../pages/IssueCertificate";
import RegisterFranchise from "../pages/RegisterFranchise";
import ListStudents from "../pages/ListStudents";
import ListFranchise from "../pages/ListFranchise";
import Dashboard from "../pages/Dashboard";

const AdminPage = () => {
  const [activePage, setActivePage] = useState("Dashboard");

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
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen text-sm">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-md p-4">
        <h2 className="text-base font-semibold mb-3 text-center">Admin Panel</h2>
        <hr className="mb-3" />

        <ul className="space-y-2">
          {["Dashboard", "AddStudents", "IssueCertificate", "RegisterFranchise", "ListStudents", "ListFranchise"].map((page) => (
            <li
              key={page}
              className={`cursor-pointer p-2 rounded-md text-gray-700 hover:bg-blue-200 text-xs ${
                activePage === page ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-4/5 p-4 overflow-auto">{renderPage()}</div>
    </div>
  );
};

export default AdminPage;
