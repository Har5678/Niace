import jwt from "jsonwebtoken"

const adminLogin = async (req, res) => {
    
    try {
        const {email,password} = req.body;
        console.log(process.env.ADMIN_EMAIL);
        console.log(process.env.ADMIN_PASSWORD);
        
        if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            console.log(token);
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid admin credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default adminLogin;