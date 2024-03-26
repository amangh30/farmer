import React,{ useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import '../style/Login_Farmer.css'; 

const Login_Farmer = () =>{




    return (
    
    <div className="bg1">
        
    <div className= 'wrapper'>
    <form action = "">
    <h1>Log-In as Farmer</h1>


    <div className= "input-box">
    <input type = "text" placeholder='EMAIL-ID' required/>
    <EmailIcon style={{fontSize:'35px'}} className='icon' />
    </div>




    <div className= "input-box">
    <input type = "text" placeholder='PASSWORD' required/>
    <LockIcon style={{fontSize:'35px'}} className='icon'/>
    </div>

    <button type="submit">Log-In</button>

    <div className="register-link">
    <p>DON'T HAVE AN ACCOUNT? <a href="#">Register</a></p>
    </div>

    </form>
    </div>
    </div>

    );
}

export default Login_Farmer
