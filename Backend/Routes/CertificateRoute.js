import express from "express"
import { getCertificate } from "../Controllers/CertificateController.js";


export const CertificateRoute= express.Router();

CertificateRoute.post("/certificate",getCertificate);