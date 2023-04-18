import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import { Profile } from './components/Profile';


function App() {
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/signup" element={<Register></Register>}/>
        <Route exact path="/loginPage"element={<Login></Login>}/>
        <Route exact path="/"element={<Home></Home>}/>
        <Route exact path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route exact path="/profile" element={<Profile></Profile>}></Route>
        
        
        
       
      </Routes>
     </Router>
      
      

    </div>
  );
}

export default App;
