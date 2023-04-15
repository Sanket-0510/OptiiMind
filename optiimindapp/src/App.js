import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/register" element={<Register></Register>}/>
        <Route exact path="/login"element={<Login></Login>}/>
        <Route exact path="/"element={<Home></Home>}/>
        
       
      </Routes>
     </Router>
      
      

    </div>
  );
}

export default App;
