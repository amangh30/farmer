import React, { useEffect, useState } from 'react';
import Homem from './components/Homem';
import Login_Customer from './components/Login_Customer';
import Login_Farmer from './components/Login_Farmer';
import SignUp_Farmer from './components/SignUp_Farmer';
import SignUp_Customer from './components/SignUp_Customer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGlobal } from './GlobalContext';
import './LoadingPage.css'; // Import your CSS file for styling
import Dashboard  from './components/Dashboard'
import Cart from './components/Cart'
import Home from './components/Home';

function App() {
  const { access, setAccess,access2, setAccess2 } = useGlobal();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[]);

  return (
    <Router>
         {isLoading ? (
          <div className="loading-page">
            <div className="spinner"></div>
          </div>
        ) : (<Routes>
        <Route exact path="/" element={<Homem/>}/>
        <Route path='/loginf' element={<Login_Farmer/>}/>
        <Route path='/login' element={<Login_Customer/>}/>
        <Route path='/signupf' element={<SignUp_Farmer/>}/>
        <Route path='/signup' element={<SignUp_Customer/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>)}
    </Router>
  );
}

export default App;
