import React from 'react';
import Navbar from './components/Navbar';
import Login_Customer from './components/Login_Customer';
import Login_Farmer from './components/Login_Farmer';
import SignUp_Farmer from './components/SignUp_Farmer';
import SignUp_Customer from './components/SignUp_Customer';

function App() {
  return (
    <div className="App">
      <SignUp_Farmer/>
    </div>
  );
}

export default App;
