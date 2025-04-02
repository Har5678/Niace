import StudentModel from "../Model/StudentModel.js";


//add a new student
export const addStudent = async (req, res) => {
    try {
        
        const { registrationNo, name, motherName, fatherName, email, course, address, contact } = req.body;
        // Check if the image was uploaded
        console.log(name, motherName, fatherName, email, course, address, contact, registrationNo);
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
            return res.status(400).json({ success: false,message: "❌ Student with this Email or Registration No already exists!" });
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
            CertificateIssued:"No"
        });
        // ✅ Save to database
        await student.save();
        res.status(201).json({success:true, message: "✅ Student added successfully!", student });

    } catch (error) {
        console.error("❌ Error adding student:", error);
        // 🔥 Handle duplicate key error (MongoDB code 11000)
        if (error.code === 11000) {
            return res.status(400).json({success:false, message: "❌ Duplicate entry: Student with this Email or Registration No already exists!" });
        }
        res.status(500).json({ success: false, message: "❌ Internal Server Error" });
    }
};


//get all the students
export const getStudents = async (req, res) => {
    try {
        const students = await StudentModel.find({});
        res.json({ success: true, students });
    } catch (error) {
        console.error("�� Error getting students:", error);
        res.status(500).json({ message: "�� Internal Server Error" });
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
            return res.json({ sucess:false , message: "�� Student not found" });
        }

        res.json({ success: true, student });

    } catch (error) {
        console.error("�� Error searching student:", error);
        res.status(500).json({ message: "�� Internal Server Error" });
    }
};