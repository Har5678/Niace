import React, { useState } from "react";
import { backenUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";


const IssueCertificate = () => {
  const [formData, setFormData] = useState({
    certificateNo: "",
    registrationNo: "",
    conductedBy: "",
    IssueDate:"",
    fromDate: "",
    toDate: "",
    grade: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation check
    if (!formData.certificateNo || !formData.registrationNo || !formData.conductedBy || !formData.IssueDate || !formData.fromDate || !formData.toDate || !formData.grade) {
      alert("Please fill in all required fields.");
      return;
    }

    const response = await axios.post(backenUrl + "/api/students/certificate", { formData }, { responseType: "blob" });
    console.log(response);
    if(!response.data.success){
      toast.error(response.data.message)
    }

    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    console.log("Certificate Details:", formData);
    

    // Reset form
    setFormData({
      certificateNo: "",
      registrationNo: "",
      conductedBy: "",
      fromDate: "",
      toDate: "",
      grade: "",
    });
  };

  return (
    <div className="flex justify-center h-auto bg-gray-100">
      <div className="bg-white shadow-lg mt-10 rounded-lg p-6 w-full max-w-6xl">
        <h2 className="text-xl font-semibold text-center mb-4">Issue Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-medium">Certificate No.</label>
            <input
              type="text"
              name="certificateNo"
              value={formData.certificateNo}
              onChange={handleChange}
              placeholder="Enter Certificate Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Registration No.</label>
            <input
              type="text"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              placeholder="Enter Registration Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          
          <div>
            <label className="block text-gray-700 font-medium">Conducted By</label>
            <input
              type="text"
              name="conductedBy"
              value={formData.conductedBy}
              onChange={handleChange}
              placeholder="Enter organizer/trainer's name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Issue Date</label>
            <input
              type="date"
              name="IssueDate"
              value={formData.IssueDate}
              onChange={handleChange}
              placeholder="Enter organizer/trainer's name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">From Date</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">To Date</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Enter grade (e.g., A+, B, etc.)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Issue Certificate
          </button>
        </form>
      </div>
    </div>
  );
};

export default IssueCertificate;
