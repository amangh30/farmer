import React from 'react';
import { FaUser,FaLock } from "react-icons/fa";
import '../style/Login_Customer.css'; 

const Login_Customer = () =>{

    return (

    <div className= 'wrapper'>
    <form action = "">
    <h1>LogIn</h1>

    <div className= "input-box">
    <input type = "text" placeholder='USERNAME' required/>
    <FaUser className='icon'/>
    </div>

    <div className= "input-box">
    <input type = "text" placeholder='PASSWORD' required/>
    <FaLock className='icon'/>
    </div>

    <div className="remember-forget">
    <label><input type="checkbox" />REMEMBER ME</label>
        <a href="#">Forget Password?</a>
    </div>

    <button type="submit">LogIn</button>

    <div className="register-link">
    <p>DON'T HAVE AN ACCOUNT? <a href="#">Register</a></p>
    </div>

    </form>
    </div>

    );
};


export default Login_Customer
