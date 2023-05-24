import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import TalktoDoc from "./components/TalktoDoc";
import Home from "./components/Home";

import MindSync from "./components/MindSync";
import Zenflow from "./components/Zenflow";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/chat" element={<TalktoDoc />} />
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path ="/mindsync" element ={<MindSync></MindSync>}></Route>
        <Route exact path = "/zenflow" element ={<Zenflow></Zenflow>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
