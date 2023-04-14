import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      userName: {
             type:String,
             require:true,

      },
      email:{
        type:String,
        require:true
      },
      mobileNo:{
        type:Number,
        require:true
      },
      password:{
        type:String,
        require:true
      },
      confirmPassword:{
        type:String,
        require:true
      }


      
});

const User =  mongoose.model("User",userSchema);
export default User
