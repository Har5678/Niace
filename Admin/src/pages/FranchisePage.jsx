import React, { useState } from "react";
import AddStudents from "../pages/AddStudents";
import ListStudents from "../pages/ListStudents";

const Fpage = () => {
  const [activePage, setActivePage] = useState("AddStudents");

  const renderPage = () => {
    switch (activePage) {
      case "AddStudents":
        return <AddStudents />;
      case "ListStudents":
        return <ListStudents />;
      default:
        return <AddStudents />;
    }
  };

  return (
    <div className="flex h-screen text-sm">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-md p-4">
        <h2 className="text-base font-semibold mb-3 text-center">Admin Panel</h2>
        <hr className="mb-3" />

        <ul className="space-y-2">
          {["AddStudents", "ListStudents"].map((page) => (
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

export default Fpage;
