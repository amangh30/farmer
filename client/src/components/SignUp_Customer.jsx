import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import '../style/SignUp_Customer.css'; 

const SignUp_Customer = () =>{

    return (

    <div className= 'wrapper'>
    <form action = "">
    <h1>Sign-Up as Consumer</h1>

    <div className= "input-box">
    <input type = "text" placeholder='USER-NAME' required/>
    <PersonIcon style={{fontSize:'35px'}} className='icon' />
    </div>
    
    <div className= "input-box">
    <input type = "text" placeholder='EMAIL-ID' required/>
    <EmailIcon style={{fontSize:'35px'}} className='icon' />
    </div>


    <div className= "input-box">
    <input type = "text" placeholder='PASSWORD' required/>
    <LockIcon style={{fontSize:'35px'}} className='icon'/>
    </div>

    <button type="submit">Sign-Up</button>

    
    </form>
    </div>

    );
};


export default SignUp_Customer
