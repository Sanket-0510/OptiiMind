import axios from "axios";
import React from "react";

const CookieTest = () => {

                        const  handleSubmit = async()=>{
                           await axios.post("https://optiimind.onrender.com/cookiecheck")
                         }
  return <div>
     <button onClick={handleSubmit}>submit</button>
  </div>;
};

export default CookieTest;
