import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    registrationNo:{type:"String", required:"true"},
    name: { type: String, required: true },
    motherName: String,
    fatherName: String,
    email: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    address: String,
    contact: { type: String, required: true },
    image: String,
    CertificateIssued:{ type: String, required: true},
    FranchiseName:{ type: String, required:true}
}, { timestamps: true });

const StudentModel = mongoose.model("Student", studentSchema);
export default StudentModel;
