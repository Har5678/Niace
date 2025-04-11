import FranchiseModel from "../Model/FranchiseModel.js";
import StudentModel from "../Model/StudentModel.js";
import jwt from "jsonwebtoken"

//add a new student
export const addStudent = async (req, res) => {
    try {

        const { registrationNo, name, motherName, fatherName, email, course, address, contact, token2, token } = req.body;
        // Check if the image was uploaded
        const image = req.file ? `uploads/${req.file.filename}` : "";
        // Validate required fields
        if (!registrationNo || !name || !email || !course || !contact) {
            return res.status(400).json({ message: "❌ Registration No, Name, Email, Course, and Contact are required!" });
        }

        // 🔍 Check if student already exists (by email OR registration number)
        const existingStudent = await StudentModel.findOne({
            $or: [{ email }, { registrationNo }]
        });

        if (existingStudent) {
            return res.status(400).json({ success: false, message: "❌ Student with this Email or Registration No already exists!" });
        }

        let decode;
        let franchise;

        if (token2) {
            decode = jwt.verify(token2, process.env.JWT_SECRET);
            franchise = await FranchiseModel.findById(decode.id);
            if (!franchise) {
                return res.status(403).json({ success: false, message: "�� Forbidden: Invalid token or franchise not found!" });
            }
        }



        // ✅ Create new student object
        const student = new StudentModel({
            registrationNo,
            name,
            motherName,
            fatherName,
            email,
            course,
            address,
            contact,
            image,
            CertificateIssued: "No",
            FranchiseName: franchise ? franchise.name : "NIMS(National Institute Of Modern Science)"
        });
        // ✅ Save to database
        await student.save();
        console.log(student);
        res.status(201).json({ success: true, message: "✅ Student added successfully!", student });

    } catch (error) {
        console.error("❌ Error adding student:", error);
        // 🔥 Handle duplicate key error (MongoDB code 11000)
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: "❌ Duplicate entry: Student with this Email or Registration No already exists!" });
        }
        res.status(500).json({ success: false, message: "❌ Internal Server Error" });
    }
};


//get all the students
export const getStudents = async (req, res) => {
    try {
        const token = req.headers.token2;
        let students;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
                if (err) {
                    return res.status(403).json({ success: false, message: "Invalid token" });
                }

                const franchise = await FranchiseModel.findById(decode.id);
                if (!franchise) {
                    return res.status(403).json({ success: false, message: "Franchise not found" });
                }

                students = await StudentModel.find({ FranchiseName: franchise.name }).sort({ createdAt: -1 }).limit(50);
                return res.json({ success: true, students });
            });
        } else {
            students = await StudentModel.find().sort({ createdAt: -1 }).limit(50);
            res.json({ success: true, students });
        }
    } catch (error) {
        console.error("Error getting students:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


//delete student

export const deleteStudent = async (req, res) => {
    try {
        const { Id } = req.body;

        console.log(Id);

        // Find and remove the student
        const deletedStudent = await StudentModel.findByIdAndDelete(Id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "�� Student not found" });
        }

        res.json({ success: true, message: "�� Student deleted successfully!" });

    } catch (error) {
        console.error("�� Error deleting student:", error);
        res.status(500).json({ message: "�� Internal Server Error" });
    }
};

//search by registration Number 

export const searchByRegistrationNo = async (req, res) => {
    try {
        // Find the student
        const student = await StudentModel.findOne({ registrationNo: req.body.regNumber.toString().trim() });

        if (!student) {
            return res.json({ sucess: false, message: "�� Student not found" });
        }

        res.json({ success: true, student });

    } catch (error) {
        console.error("�� Error searching student:", error);
        res.status(500).json({ message: "�� Internal Server Error" });
    }
};

//search student by its franchise name 

export const searchByFranchiseName = async (req, res) => {
    console.log(req.body);
    try {
        const students = await StudentModel.find({ FranchiseName: req.body.name }).sort({ createdAt: -1 });
        console.log(students);
        if (!students) {
            return res.json({ success: false, message: "No students found for this franchise" });
        }

        res.json({ success: true, students });

    } catch (error) {
        console.error("Error searching students:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
