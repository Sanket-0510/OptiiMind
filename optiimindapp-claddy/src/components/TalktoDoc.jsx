import React, { useState } from 'react';
import Navbar from './Navbar';
import "../styles1/TalktoDoc.css"
const TalktoDoc = () => {
  const [response, setresponse] = useState('')
  const [user, setuser] = useState(true)
  const BACKEND = import.meta.env.VIT_BACKEND
  async function getResponse(){

    const options ={
      method : "POST",
      body: JSON.stringify({
        prompt:"hellow how are you"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try{
      const response = await fetch(BACKEND+ "/completion", options)
      const data = await response.json();
      console.log(data)
    }
    catch(e){
      console.log(e)
    }

  }
  return (
    <div className='main-container'>
     
      <div className='chat-section'>
        <div className='chat-heading'>
          HI! WELCOME TO SOULSYNC
          <br />
          GET THINGS OFF YOUR MIND BY TEXTING OUR AI BOT
        </div>

        <div className='input-section'>
          <input type='text' placeholder='...write your mind'  />
          <button onClick={getResponse}> submit</button>
        </div>
      </div>
    </div>
  );
}

export default TalktoDoc;
