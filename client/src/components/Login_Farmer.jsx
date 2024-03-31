import React,{ useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import '../style/Login_Farmer.css'; 
import { useGlobal } from '../GlobalContext';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login_Farmer = () =>{
    const { access, setAccess,accountname,setAccountName } = useGlobal();
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
          if(!(res.data.seller)){
            toast.error("User Not found")
            return;
          }
          if(res.data.status===200){
            setAccountName(res.data.name)
            toast.success("Welcome")
            setTimeout(() => {
                setAccess(true);
                navigate('/dashboard')
            }, 1000);
        }
          else{
            toast.error(Object.values(res.data.error).join(''))
          }
        }
        catch (error) {
          console.log(error)
        }
      }

    return (
      <div>
        {access?(<Navigate to="/dashboard" replace={true} />):(<div className="bg1">
        
        <div className= 'wrapper'>
        <form onSubmit={handleSubmit} action = "">
        <h1 style={{color:'white'}}>Log-In as Farmer</h1>
    
    
        <div style={{color:'white'}} className= "input-box">
        <input style={{color:'white'}} value={email} onChange={handleEmail} type = "text" placeholder='EMAIL-ID' required/>
        <EmailIcon style={{fontSize:'35px',color:'white'}} className='icon' />
        </div>
    
    
    
    
        <div style={{color:'white'}} className= "input-box">
        <input style={{color:'white'}} value={password} onChange={handlePass} type = "password" placeholder='PASSWORD' required/>
        <LockIcon  style={{fontSize:'35px',color:'white'}} className='icon'/>
        </div>
    
        <button type="submit">Log-In</button>
    
        <div className="register-link">
        <p>DON'T HAVE AN ACCOUNT? <Link to='/signupf'>Register</Link></p>
        </div>
    
        </form>
        </div>
        <ToastContainer />
        </div>)}
    
    
    </div>


    );
}

export default Login_Farmer
