import fs from 'fs';
import path from "path";
import { PDFDocument, rgb } from 'pdf-lib';
import { fileURLToPath } from 'url';
import StudentModel from '../Model/StudentModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getCertificate = async (req, res) => {
    try {
        const { formData } = req.body;
        
        const { registrationNo, certificateNo, IssueDate, conductedBy, fromDate, toDate, grade } = formData;

        // Find student by registration number
        const student = await StudentModel.findOne({ registrationNo });

        if (!student) {
            return res.status(404).json({ success: false, message: "❌ Student not found" });
        }

        

        // Update CertificateIssued status to "Yes"
        await StudentModel.findByIdAndUpdate(student._id, { CertificateIssued: "Yes" });

        const { name, fatherName, course, image } = student;
        

        // Load certificate template
        const templatePath = path.join(__dirname, "upload", "Certificate.pdf");
        if (!fs.existsSync(templatePath)) {
            return res.status(500).json({ success: false, message: "❌ Certificate template not found!" });
        }
        
        console.log("Template Path:", templatePath);
        const pdfBytes = fs.readFileSync(templatePath);
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Get the first page of the PDF
        const page = pdfDoc.getPage(0);
        
        const fontSize = 13;

        // Fill in student details in the PDF
        page.drawText(registrationNo, { x: 398, y: 329, size: 12, color: rgb(0, 0, 0) });
        page.drawText(certificateNo, { x: 124, y: 329, size: 12, color: rgb(0, 0, 0) });
        page.drawText(name, { x: 225, y: 220, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(fatherName, { x: 225, y: 196, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(course, { x: 200, y: 156, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(conductedBy, { x: 240, y: 140, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(fromDate, { x: 118, y: 120, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(toDate, { x: 238, y: 120, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(grade, { x: 195, y: 100, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(IssueDate, { x: 164, y: 77, size: fontSize, color: rgb(0, 0, 0) });

        
        // ✅ Embed Student Image (PNG, JPG, or JPEG)
        if (image) {
            const imagePath = path.join(__dirname, "..", image); // Convert relative path to absolute
            
            
            if (fs.existsSync(imagePath)) {
                const imageBytes = fs.readFileSync(imagePath);
                const ext = path.extname(imagePath).toLowerCase(); // Get file extension
                
                let studentImage;
                if (ext === ".png") {
                    studentImage = await pdfDoc.embedPng(imageBytes);
                } else if (ext === ".jpg" || ext === ".jpeg") {
                    studentImage = await pdfDoc.embedJpg(imageBytes);
                } else {
                    console.error("❌ Unsupported image format:", imagePath);
                }

                if (studentImage) {
                    page.drawImage(studentImage, {
                        x: 400,   // Adjust X position
                        y: 220,   // Adjust Y position
                        width: 80,  // Adjust Width
                        height: 80  // Adjust Height
                    });
                }
            } else {
                console.error("❌ Image not found:", imagePath);
            }
        }

        

        // ✅ Generate and Send Modified PDF
        const modifiedPdfBytes = await pdfDoc.save();
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'inline; filename="certificate.pdf"');
        res.send(Buffer.from(modifiedPdfBytes));

    } catch (error) {
        console.error("❌ Error generating certificate:", error);
        res.status(500).json({ success: false, message: "❌ Internal Server Error" });
    }
};
