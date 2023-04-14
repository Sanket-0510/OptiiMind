import User from "../Schemas/userSchema.js";
export const register = async (req, res) => {
  try {
    const { userName, email, mobileNo, password, confirmPassword } = req.body;

    const newUser = new User({
      userName: userName,
      email: email,
      mobileNo: mobileNo,
      password: password,
      confirmPassword: confirmPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    console.log("user saved successfully")
  } catch (e) {
    console.log(e);
  }
};

