import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import "../styles1/TalktoDoc.css"
const TalktoDoc = () => {
  const [response, setresponse] = useState('')
  const [user, setuser] = useState(true)
  const [prompt, setprompt] = useState('')
  const BACKEND = import.meta.env.VITE_BACKEND
  const inputRef = useRef(null)
  async function getResponse() {
    
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: prompt
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const data = await fetch(BACKEND+"/completions", options)

      const r2 = await data.json()
      console.log(r2)
      setresponse(r2.choices[0].message.content)
      setprompt('')
      inputRef.current.value = ''
    }
    catch (e) {
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
          <h1 style={{transform:"translateY(200px)"}}>
          {
            response
          }
          </h1>
          
        </div>

        <div className='input-section'>
          <input type='text' placeholder='...write your mind' onChange={(e) => setprompt(e.target.value)} ref={inputRef} />
          <button onClick={getResponse}> submit</button>
        </div>
      </div>
    </div>
  );
}

export default TalktoDoc;
