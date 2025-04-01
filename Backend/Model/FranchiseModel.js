import mongoose from "mongoose";

const franchiseSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true, unique: true}
},{ timestamps: true })


const FranchiseModel = mongoose.model("franchise", franchiseSchema);

export default FranchiseModel;