import React, { useState } from "react";
import AddStudents from "../pages/AddStudents";
import IssueCertificate from "../pages/IssueCertificate";
import RegisterFranchise from "../pages/RegisterFranchise";
import ListStudents from "../pages/ListStudents";
import Dashboard from "./Dashboard";


const Fpage= () => {
  const [activePage, setActivePage] = useState("AddStudents");

  // Function to render the selected page
  const renderPage = () => {
    switch (activePage) {
      
      case "AddStudents":
        return <AddStudents/>;
      case "ListStudents":
        return <ListStudents/>;
      default:
        return <AddStudents/>;
    }
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Dashboard</h2>
        <hr className="mb-4" />

        <ul className="space-y-4">
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
              activePage === "ListStudents" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActivePage("ListStudents")}
          >
            📜 List Students
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">{renderPage()}</div>
    </div>
  );
};

export default Fpage;
