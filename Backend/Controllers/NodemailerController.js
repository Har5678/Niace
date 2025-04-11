import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'niacemrt@gmail.com',  // Replace with your Gmail address
      pass: 'xijt rpyd qqzi syzd',
    }
  });



const nodemailers=  (req,res) => {
  console.log(req.body);
    const {formData}= req.body
    
  
    const mailOptions = {
        from: "niacemrt@gmail.com",      // Sender's email
        to: 'niacemrt@gmail.com', // Recipient's email
        subject: 'Hey! The new lead is here', // Subject line
        text: `Here's the new lead. Please contact the customer.\nDetails:\nName: ${formData.fullName}  \n Email: ${formData.email} \n Phone: ${formData.mobile} \n Message: ${formData.message}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
          return res.json({success:false, message:"Failed to send email"});
        } else {
          console.log('Email sent:', info.response);
          return res.json({success:true, message:"Email sent successfully"});
        }
      });

      
}

export default nodemailers;