import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        subject: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       try {
        const response= await axios.post(backenUrl+"/api/mail/nodemailer",{formData});
        toast.success("Message sent successfully!");
        setFormData({
            fullName: "",
            mobile: "",
            subject: "",
            email: "",
            message: ""
        })
       } catch (error) {
        console.log(error.message)
       }
            
    };

    return (
        <>
            {/* Contact Header */}
            <div className="relative bg-[#0e1b3d] text-white text-center py-20">
                <h1 className="text-3xl md:text-5xl font-bold mt-20">Contact Us</h1>
                <div className="mt-4 text-lg">
                    <Link to="/" className="text-[#ff9900] hover:underline">
                        Home
                    </Link>
                    <span className="mx-2 text-[#ff9900]">▢</span>
                    <span className="text-gray-300">Contact Us</span>
                </div>
            </div>

            {/* Contact Form & Map Section */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-9xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact For Any Queries</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-3 border rounded-md w-full" required />
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No" className="p-3 border rounded-md w-full" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="p-3 border rounded-md w-full" required />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded-md w-full" required />
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" className="p-3 border rounded-md w-full" required></textarea>
                        <button type="submit" className="bg-orange-500 text-white font-semibold p-3 w-full rounded-md hover:bg-orange-600 transition">
                            Submit
                        </button>
                    </form>
                </div>

                {/* Google Map & Get Directions */}
                <div className="w-full md:w-1/2 h-auto mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
                    <iframe
                        className="w-full h-90 rounded-lg shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937465262!2d77.09124026700522!3d28.646677165134004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf13e4748c0ed%3A0x9fdf0f961defff7c!2sKrishna%20Computer%20Education%20Meerut!5e0!3m2!1sen!2sin!4v1711181314075!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    {/* Get Directions Button */}
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=N-24,+Vishnu+Aawas,+Opposite+IIMT+University,+Ganga+Nagar,+Meerut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                    >
                        Get Directions
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
