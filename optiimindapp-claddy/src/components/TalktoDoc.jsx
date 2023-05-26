import React, { useRef, useState } from "react";
import "../styles1/TalktoDoc.css";
import Navbar from "./Navbar";
const TalktoDoc = () => {
  const [response, setresponse] = useState("");
  const [user, setuser] = useState(true);
  const [chatHeadingClass, setChatHeadingClass] = useState("chat-heading");
  const [chatgpt, setchatgpt] = useState("chatgpt-invisible");
  const [prompt, setprompt] = useState("");
  const BACKEND = import.meta.env.VITE_BACKEND;
  const inputRef = useRef(null);
  async function getResponse() {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await fetch(BACKEND + "/completions", options);

      const r2 = await data.json();
      console.log(r2);
      setresponse(r2.choices[0].message.content);
      setprompt("");
      inputRef.current.value = "";
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="chat-section">
        <div className={chatHeadingClass}>
          HI! WELCOME TO SOULSYNC
          <br />
          GET THINGS OFF YOUR MIND BY TEXTING OUR AI BOT
        </div>
        <h1 className={chatgpt}>
          {response}
        </h1>
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="...write your mind"
          onChange={(e) => setprompt(e.target.value)}
          ref={inputRef}
        />
        <button
          onClick={() => {
            getResponse();
            setChatHeadingClass("chat-heading chat-heading2");
            setchatgpt("chatgpt-visible");
          }}
        >
          <img
            src="https://www.shutterstock.com/image-vector/send-vector-minimal-single-flat-260nw-1015526557.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default TalktoDoc;
