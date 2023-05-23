import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import TalktoDoc from "./components/TalktoDoc";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/chat" element={<TalktoDoc />} />
        <Route exact path="/" element={<Home></Home>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
