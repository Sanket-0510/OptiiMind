import express from 'express';
const app = express();
//main branch file

import User from '../Schemas/userSchema.js';



const profile = async(req,res)=>{
    const usercookie = req.cookie.user;
    const user = User.findOne({_id:usercookie._id});
    const name = user.userName;
    const email = user.email;
    const number = user.mobileNo;
    const data = {name, email,number}
    res.json(data)
    


}
export default profile