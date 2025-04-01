import FranchiseModel from "../Model/FranchiseModel.js";
import StudentModel from "../Model/StudentModel.js";

//function which will calculate the total franchise registered, total students and total issued certicates



export const getTotalStats = async (req,res) => {
    try {
        
        
        const franchiseCount = await FranchiseModel.countDocuments();
        const studentCount = await StudentModel.countDocuments();
        const certifiedCount = await StudentModel.countDocuments({ CertificateIssued:"Yes" });

        console.log(franchiseCount, studentCount, certifiedCount);
        const data= {
            franchiseCount,
            studentCount,
            certifiedCount
        }
        console.log(data);
        

        return res.json({success: true, data})
    } catch (error) {
        console.log(error);
        return {
            franchiseCount: 0,
            studentCount: 0,
            certifiedCount: 0
        };
    }
};