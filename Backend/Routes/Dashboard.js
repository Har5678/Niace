import express from "express"
import { getTotalStats } from "../Controllers/DashboardController.js";

export const dashboardRoute=express.Router();

dashboardRoute.get("/count",getTotalStats)