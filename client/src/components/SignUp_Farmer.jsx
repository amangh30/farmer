import React ,{ useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import '../style/SignUp_Farmer.css'; 

const SignUp_Farmer = () =>{

  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: ''
  });

  const handleDropdownChange = (dropdown, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [dropdown]: value
    });
  };


    return (

    <div className= 'wrapper'>
    <form action = "">
    <h1>Sign-Up as Farmer</h1>

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



    <select
        className="dropdown"
        value={selectedOptions.dropdown1}
        onChange={(e) => handleDropdownChange('dropdown1', e.target.value)}
      >
        <option key="1" value="">STATE</option>
        <LocationOnIcon style={{fontSize:'35px'}} className='icon' />
        <option key="2" value="Andhra Pradesh">Andhra Pradesh</option>
<option key="3" value="Arunachal Pradesh">Arunachal Pradesh</option>
<option key="4" value="Assam">Assam</option>
<option key="5" value="Bihar">Bihar</option>
<option key="6" value="Chandigarh">Chandigarh</option>
<option key="7" value="Chhattisgarh">Chhattisgarh</option>
<option key="8" value="Delhi">Delhi</option>
<option key="9" value="Goa">Goa</option>
<option key="10" value="Gujarat">Gujarat</option>
<option key="11" value="Haryana">Haryana</option>
<option key="12" value="Himachal Pradesh">Himachal Pradesh</option>
<option key="13" value="Jammu and Kashmir">Jammu and Kashmir</option>
<option key="14" value="Jharkhand">Jharkhand</option>
<option key="15" value="Karnataka">Karnataka</option>
<option key="16" value="Kerala">Kerala</option>
<option key="17" value="Madhya Pradesh">Madhya Pradesh</option>
<option key="18" value="Maharashtra">Maharashtra</option>
<option key="19" value="Manipur">Manipur</option>
<option key="20" value="Meghalaya">Meghalaya</option>
<option key="21" value="Mizoram">Mizoram</option>
<option key="22" value="Nagaland">Nagaland</option>
<option key="23" value="Odisha">Odisha</option>
<option key="24" value="Punjab">Punjab</option>
<option key="25" value="Rajasthan">Rajasthan</option>
<option key="26" value="Sikkim">Sikkim</option>
<option key="27" value="Tamil Nadu">Tamil Nadu</option>
<option key="28" value="Telangana">Telangana</option>
<option key="29" value="Tripura">Tripura</option>
<option key="30" value="Uttar Pradesh">Uttar Pradesh</option>
<option key="31" value="Uttarakhand">Uttarakhand</option>
<option key="32" value="West Bengal">West Bengal</option>

      </select>




    <button type="submit">Sign-Up</button>

    
    </form>
    </div>

    );
};


export default SignUp_Farmer
