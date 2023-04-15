import axios from "axios";
import React from "react";

const CookieTest = () => {

                        const  handleSubmit = async()=>{
                           await axios.post("http://localhost:8000/cookiecheck")
                         }
  return <div>
     <button onClick={handleSubmit}>submit</button>
  </div>;
};

export default CookieTest;
