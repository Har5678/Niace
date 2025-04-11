import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";

const AddStudents = ({token,token2}) => {
    
    const [registrationNo, setRegistrationNo] = useState("");
    const [name, setName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("registrationNo", registrationNo);
            formData.append("name", name);
            formData.append("motherName", motherName);
            formData.append("fatherName", fatherName);
            formData.append("address", address);
            formData.append("contact", contact);
            formData.append("email", email);
            formData.append("course", course);
            formData.append("image", image);
           token?formData.append("token",token):formData.append("token","");
           token2?formData.append("token2",token2):formData.append("token","");

            const response = await axios.post(backenUrl + "/api/student/add", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setRegistrationNo("");
                setName("");
                setMotherName("");
                setFatherName("");
                setAddress("");
                setContact("");
                setEmail("");
                setCourse("");
                setImage(null);
                setImagePreview(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mt-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Upload Image Section */}
                    <div>
                        <p className="mb-2 text-gray-700 font-medium">Upload Image</p>
                        <div className="flex gap-2">
                            <label htmlFor="imageUpload">
                                <img
                                    className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                                    src={imagePreview || assets.Upload}
                                    alt="Student"
                                />
                                <input
                                    type="file"
                                    id="imageUpload"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Registration Number Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Registration No</label>
                        <input
                            type="text"
                            name="registrationNo"
                            value={registrationNo}
                            onChange={(e) => setRegistrationNo(e.target.value)}
                            placeholder="Enter registration number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            autoComplete="off"
                        />
                    </div>

                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter student name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            autoComplete="off"
                        />
                    </div>

                    {/* Mother's Name Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Mother's Name</label>
                        <input
                            type="text"
                            name="motherName"
                            value={motherName}
                            onChange={(e) => setMotherName(e.target.value)}
                            placeholder="Enter mother's name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* Father's Name Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Father's Name</label>
                        <input
                            type="text"
                            name="fatherName"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                            placeholder="Enter father's name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Address</label>
                        <textarea
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* Contact Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={contact}
                            onChange={(e) => {
                                if (/^\d*$/.test(e.target.value)) setContact(e.target.value);
                            }}
                            placeholder="Enter contact number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            autoComplete="off"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            autoComplete="off"
                        />
                    </div>

                    {/* Course Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="Enter course"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            autoComplete="off"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Add Student
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddStudents;
