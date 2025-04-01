import express from "express"
import upload from "../Middlewares/Multer.js";
import { addStudent, deleteStudent, getStudents, searchByRegistrationNo } from "../Controllers/StudentController.js";

export const studentRoute= express.Router();


studentRoute.post("/add",upload.single("image"),addStudent);
studentRoute.get("/list",getStudents);
studentRoute.post("/sv",searchByRegistrationNo);
studentRoute.post("/delete",deleteStudent);
