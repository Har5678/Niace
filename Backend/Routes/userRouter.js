import express from "express"
import adminLogin from "../Controllers/userController.js";


export const userRouter = express.Router();

userRouter.post("/admin", adminLogin)