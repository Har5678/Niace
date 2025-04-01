import express from "express";
import nodemailers from "../Controllers/NodemailerController.js";


export const MailRoute= express.Router();

MailRoute.post("/nodemailer",nodemailers)