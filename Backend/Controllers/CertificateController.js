import fs from 'fs';
import path from "path";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
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
        const font= await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        // Fill in student details in the PDF
        page.drawText(registrationNo, { x: 630, y: 539.9, size: fontSize,font, color: rgb(0, 0, 0) });
        page.drawText(certificateNo, { x: 145, y: 539.9, size: fontSize, font,color: rgb(0, 0, 0) });
        page.drawText(name, { x: 330, y: 366.5, size: fontSize,font, color: rgb(0, 0, 0) });
        page.drawText(fatherName, { x: 360, y: 322.5,font, size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(course, { x: 300, y: 240.5, font ,size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(conductedBy, { x: 320, y: 196, font ,size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(`: ${fromDate}`, { x: 319, y: 161.5, font ,size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(`: ${toDate}`, { x: 409, y: 161.5, font ,size: fontSize, color: rgb(0, 0, 0) });
        page.drawText(IssueDate, { x: 145, y: 69, font,size: fontSize, color: rgb(0, 0, 0) });

        
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
