import express from "express";
import cors from "cors"
import { userRouter } from "./Routes/userRouter.js";
import "dotenv/config"
import connectDB from "./Config/Mongodb.js";
import { studentRoute } from "./Routes/studentRouter.js";
import { CertificateRoute } from "./Routes/CertificateRoute.js";
import { franchiseRoute } from "./Routes/FranchiseRoute.js";
import { dashboardRoute } from "./Routes/Dashboard.js";
import { MailRoute } from "./Routes/MailRoute.js";
const app=express();
const port=process.env.PORT || 4000


app.use(cors());
app.use(express.json());
connectDB();

app.use("/uploads", express.static("uploads"));


app.get("/",(req,res)=>{
    res.send("Api Working");
})

app.use("/api/user",userRouter);
app.use("/api/student",studentRoute);
app.use("/api/students",CertificateRoute);
app.use("/api/franchise",franchiseRoute);
app.use("/api/dashboard",dashboardRoute);
app.use("/api/mail",MailRoute);


app.listen(port,()=>console.log("server started on PORT : " + port))