import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import TalktoDoc from "./components/TalktoDoc";
import Home from "./components/Home";
import TestRoute from "./components/TestRoute";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="https://optiimind.vercel.app/chat" element={<TalktoDoc />} />
        <Route exact path="https://optiimind.vercel.app/" element={<Home></Home>} />
        <Route exact path ="https://optiimind.vercel.app/test" element={<TestRoute></TestRoute>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
