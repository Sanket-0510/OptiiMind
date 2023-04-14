import User from "../Schemas/userSchema.js";
import bcrypt from 'bcrypt';
export const register = async (req, res) => {
  try {
    const { userName, email, mobileNo, password, confirmPassword } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);


    const newUser = new User({
      userName: userName,
      email: email,
      mobileNo: mobileNo,
      password: passwordHash,
      confirmPassword: passwordHash,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    console.log("user saved successfully")
  } catch (e) {
    console.log(e);
  }
};

export const login = async(req,res)=>{
  try{
      const {userName, password} = req.body;
      const userdoc = User.findById({userName:userName});



  }
  catch(e){
               console.log(e);          
  }
}

