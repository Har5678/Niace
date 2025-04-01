import express from 'express';
import { deleteFranchise, FranchiseLogin, FranchiseRegistration, getAllFranchises } from '../Controllers/FranchiseController.js';


export const franchiseRoute= express.Router();

franchiseRoute.post("/register",FranchiseRegistration)
franchiseRoute.post("/login",FranchiseLogin);
franchiseRoute.get("/details",getAllFranchises)
franchiseRoute.post("/delete",deleteFranchise);