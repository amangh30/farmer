import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import '../style/Login_Customer.css'; 
import { useGlobal } from '../GlobalContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login_Customer = () =>{
    const { access2, setAccess2 } = useGlobal();
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePass = (e) => {
        setPassword(e.target.value);
      }
      const handleEmail = (e) => {
        setEmail(e.target.value);
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = {
            email, password
          }
          const res = await axios.post("http://127.0.0.1:8000/api/login/", data)
          if((res.data.seller)){
            toast.error("User Not found")
            return;
          }
          if(res.data.status===200){
            toast.success("Welcome")
            setTimeout(() => {
                setAccess2(true);
                navigate('/home')
            }, 1000);
          }
          else{
            toast.error(Object.values(res.data.error).join(''))
          }
        }
        catch(error){
            console.log(error)
        }
      }
    return (

    <div className="bg">    
    <div className= 'wrapper'>
    <form onSubmit={handleSubmit} action = "">
    <h1>Log-In as Consumer</h1>


    <div className= "input-box">
    <input value={email} onChange={handleEmail} style={{color:'white'}} type = "email" placeholder='EMAIL-ID' required/>
    <EmailIcon style={{fontSize:'35px'}} className='icon' />
    </div>


    <div className= "input-box">
    <input value={password} onChange={handlePass} style={{color:'white'}} type = "password" placeholder='PASSWORD' required/>
    <LockIcon style={{fontSize:'35px'}} className='icon'/>
    </div>

    <button type="submit">Log-In</button>

    <div className="register-link">
    <p>DON'T HAVE AN ACCOUNT? <Link to='/signup'>Register</Link></p>
    </div>

    </form>
    </div>
    <ToastContainer />
    </div>
    );
};


export default Login_Customer
