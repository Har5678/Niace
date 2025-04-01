import FranchiseModel from "../Model/FranchiseModel.js";

import jwt from "jsonwebtoken";
import validator from "validator";



//route for franchise Registration
export const FranchiseRegistration = async (req, res) => {
    try {
        const { franchiseName, email, password, address } = req.body.formData;

        //check if the email already exists or not 
        const exists = await FranchiseModel.findOne({ email })
        console.log(exists);

        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        //validating email and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }


        const newUser = new FranchiseModel({
            name: franchiseName,
            email,
            password,
            address
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const createToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    return token;
}

//franchise login
export const FranchiseLogin = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body.formData;
        //checking if the user exists or not 
        const user = await FranchiseModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }


        // Direct password comparison (NOT SECURE)
        if (password !== user.password) {
            return res.json({ success: false, message: "Invalid password" });
        }
        const token = createToken(user._id);

        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//get all the franchise list 

export const getAllFranchises = async (req, res) => {
    try {
        const franchises = await FranchiseModel.find();
        res.json({ success: true, franchises })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//remove franchise by its id

export const deleteFranchise = async (req, res) => {
    try {
        const { id } = req.body;
       
        
        const franchise = await FranchiseModel.findByIdAndDelete(id);
        if (!franchise) {
            return res.status(404).json({success:false, message: "Franchise not found" });
        }
        res.json({ success: true, message: "Franchise deleted successfully!" });
    } catch (error) {
        console.error("Error deleting franchise:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};